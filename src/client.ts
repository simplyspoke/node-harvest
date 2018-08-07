import * as async from 'async';
import * as Request from 'request-promise';

export class RequestClient {
  private accessToken: string;
  private accountId: string;
  private concurrency;
  private defaults;
  private queue;
  private request;
  private timeout;

  constructor(config: any) {
    this.accessToken = config.auth.accessToken;
    this.accountId = config.auth.accountId;

    this.request = Request.defaults({
      baseUrl: 'https://api.harvestapp.com',
      headers: {
        'User-Agent': config.userAgent,
        Authorization: `Bearer ${this.accessToken}`,
        'Harvest-Account-Id': this.accountId,
        'Content-Type': 'application/json'
      },
      transform: this.preprocess
    });

    // TODO: Make the user agnet required as described on https://help.getharvest.com/api-v2/introduction/overview/general/

    this.concurrency = config.throttleConcurrency || 40;

    // TODO: This needs to be broken down in to smaller chunks.
    this.queue = async.queue(this.requestGenerator(), this.concurrency);
  }

  preprocess(body, response) {
    return { headers: response.headers, data: body };
  }

  push(task) {
    this.queue.push(task);
  }

  requestGenerator() {
    return (task, done) => {
      let options: any = {};

      options.method = task.method;
      options.uri = task.uri;

      options.body = JSON.stringify(task.data);

      this.request(options)
        .then(({ headers, data }) => {
          task.callback(undefined, JSON.parse(data));
          done();
        })
        .catch(error => {
          if (error.statusCode === 429) {
            return this.retryAfter(
              task,
              error.response.headers['retry-after'],
              done
            );
          }

          task.callback(error, undefined);
          done();
        });
    };
  }

  retryAfter(task, retryAfter, done) {
    this.queue.pause();
    this.queue.unshift(task);
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.queue.resume();
      done();
    }, retryAfter * 1000);
  }
}
