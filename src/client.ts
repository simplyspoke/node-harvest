import async from 'async';
import * as Request from 'request-promise';
import { assign, cloneDeep } from 'lodash';

import Authentication from './authentication';

export default class Client {
  private defaults;
  private queue;
  private request;
  private authentication: Authentication;
  private concurrency;
  private timeout;

  constructor(config: any) {
    this.authentication = new Authentication(config.auth);

    this.request = Request.defaults({
      baseURL: 'https://api.harvestapp.com/',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
        'Harvest-Account-Id': process.env.ACCOUNT_ID,
        'User-Agent': config.userAgent
      },
      transform: this.includeHeaders
    });

    // TODO: Make the user agnet required as described on https://help.getharvest.com/api-v2/introduction/overview/general/

    this.concurrency = config.throttleConcurrency || 40;

    // TODO: This needs to be broken down in to smaller chunks.
    this.queue = async.queue(this.requestGenerator(), this.concurrency || 40);
  }

  includeHeaders(body, response, resolveWithFullResponse) {
    return { headers: response.headers, data: body };
  }

  push(task) {
    this.queue.push(task);
  }

  requestGenerator() {
    return (task, done) => {
      let options: any = {};

      options.method = task.method;
      options.url = 'https://api.harvestapp.com/' + task.uri;

      // assign(options.qs, task.qs);
      // assign(options.data, task.data);

      this.request(options)
        .then(({ headers, data }) => {
          if (headers['retry-after']) {
            this.retryAfter(task, headers['retry-after'], done);
          }

          done();
          task.callback(null, data);
        })
        .catch(error => {
          done();
          task.callback(error, null);
        });
    };
  }

  retryAfter(task, retryAfter, done) {
    this.queue.pause();
    this.queue.push(task);
    clearTimeout(this.timeout);

    // let timeout = helpers.parseTimeout(response.headers['retry-after']);
    let timeout = null;

    if (!isNaN(timeout)) {
      return (this.timeout = setTimeout(() => {
        this.queue.resume();
      }, timeout));
    }

    done();
    task.callback(timeout, null, null);
  }
}
