import asyncQueue from 'async/queue'
import axios from 'axios'
import { assign, cloneDeep } from 'lodash'

import Authentication from './authentication'
import * as helpers from './helpers'

export default class Client {
  private defaults
  private queue
  private request
  private authentication: Authentication
  private concurrency
  private timeout

  constructor(config: any) {
    this.authentication = new Authentication(config.auth)

    this.defaults = this.authentication.getConfig({
      baseURL: config.host,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': config.userAgent
      },
      timeout: null
    })

    this.request = axios.create(this.defaults)

    // TODO: Make the user agnet required as described on https://help.getharvest.com/api-v2/introduction/overview/general/

    this.concurrency = config.throttle_concurrency || 40

    // TODO: This needs to be broken down in to smaller chunks.
    this.queue = asyncQueue(function(task, done) {
      let options: any = {}

      options.method = task.query.method
      options.uri = task.query.uri

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
}
