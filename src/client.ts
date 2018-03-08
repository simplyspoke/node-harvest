import asyncQueue from 'async/queue'
import axios from 'axios'
import { assign, cloneDeep } from 'lodash'

import * as helpers from './helpers'

export default class Client {
  private defaults
  private queue
  private request
  private concurrency
  private timeout

  constructor(config: any) {
    this.request = axios.create({
      baseURL: config.host,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      timeout: null
    })

    // TODO: Make the user agnet required as described on https://help.getharvest.com/api-v2/introduction/overview/general/

    if (config.useBasic) {
      this.request.defaults.auth = {
        username: config.email,
        password: config.password
      }
    }

    this.concurrency = config.throttle_concurrency || 40

    // TODO: This needs to be broken down in to smaller chunks.
    this.queue = asyncQueue(function(task, done) {
      let options: any = {}

      options.method = task.query.method
      options.uri = task.query.uri
      if (task.query.qs.formData) {
        options.formData = task.query.qs.formData
        delete task.query.qs.formData
      }

      assign(options.qs, task.query.qs)

      this.request(task.query.uri, options)
        .then(response => {
          if (response.headers['retry-after']) {
            this.queue.pause()
            this.queue.push(task)
            done()
            clearTimeout(this._timeout)

            let timeout = helpers.parseTimeout(response.headers['retry-after'])

            if (!isNaN(timeout)) {
              return (this.timeout = setTimeout(() => {
                this.queue.resume()
              }, timeout))
            }

            task.callback(timeout, null, null)
          }

          done('requested')
          task.callback(null, response)
        })
        .catch(error => {
          task.callback(error, null, null)
        })
    }, this.concurrency || 40)
  }

  push(query, callback) {
    this.queue.push({
      query: query,
      callback: callback
    })
  }

  setAccessToken(options, cb) {
    return new Promise((resolve, reject) => {
      this.request
        .post('/oauth2/token', {
          data: options
        })
        .then(response => {
          if (!response.access_token) {
            return reject('Provided access code was rejected by Harvest, no token was returned')
          }

          this.request.defaults.headers.Authorization = `Bearer response.access_token`
          resolve('Access token set')
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
