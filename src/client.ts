import async from 'async';
import * as Request from 'request-promise';

export default class Client {
  private accessToken: string;
  private accountId: string;
  private concurrency;
  private defaults;
  private queue;
  private request;
  // private timeout;

  constructor(config: any) {
    this.accessToken = config.auth.accessToken;
    this.accountId = config.auth.accountId;

    this.request = Request.defaults({
      baseURL: 'https://api.harvestapp.com/',
      headers: {
        'User-Agent': config.userAgent,
        Authorization: `Bearer ${this.accessToken}`,
        'Harvest-Account-Id': this.accountId
      },
      transform: this.preprocess
    });

    // TODO: Make the user agnet required as described on https://help.getharvest.com/api-v2/introduction/overview/general/

    this.concurrency = config.throttleConcurrency || 40;

    // TODO: This needs to be broken down in to smaller chunks.
    this.queue = async.queue(this.requestGenerator(), this.concurrency);
  }

  preprocess(body, response) {
    // if (headers['retry-after']) {
    //   this.retryAfter(task, headers['retry-after'], done);
    // }

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
          task.callback(null, JSON.parse(data));
          done();
        })
        .catch(error => {
          task.callback(error, null);
          done();
        });
    };
  }

  // retryAfter(task, retryAfter, done) {
  //   this.queue.pause();
  //   this.queue.push(task);
  //   clearTimeout(this.timeout);
  //
  //   // let timeout = helpers.parseTimeout(response.headers['retry-after']);
  //   let timeout = null;
  //
  //   if (!isNaN(timeout)) {
  //     return (this.timeout = setTimeout(() => {
  //       this.queue.resume();
  //     }, timeout));
  //   }
  //
  //   done();
  //   task.callback(timeout, null, null);
  // }
}
