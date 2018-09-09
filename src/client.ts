import { queue, AsyncQueue } from 'async';
import * as Request from 'request-promise';

interface RequestTask {
  method: string;
  uri: string;
  data: any;
  callback: (error: any, data: any) => void;
}

export class RequestClient {
  private accessToken: string;
  private accountId: string;
  private concurrency: number;
  private queue: AsyncQueue<RequestTask>;
  private timeout: NodeJS.Timer;

  // this signature is required because @types/request-promise does not expose
  // the RequestAPI interface
  private request: (options: any) => Promise<{ headers: any; data: any }>;

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
    }) as any;

    // TODO: Make the user agnet required as described on https://help.getharvest.com/api-v2/introduction/overview/general/

    this.concurrency = config.throttleConcurrency || 40;

    // TODO: This needs to be broken down in to smaller chunks.
    this.queue = queue<RequestTask, any>(
      this.requestGenerator(),
      this.concurrency
    );
  }

  preprocess(body: any, response: { headers: any }) {
    return { headers: response.headers, data: body };
  }

  push(task: RequestTask) {
    this.queue.push(task);
  }

  requestGenerator() {
    return (task: RequestTask, done: Function) => {
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

  retryAfter(task: RequestTask, retryAfter: number, done: Function) {
    this.queue.pause();
    this.queue.unshift(task);
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.queue.resume();
      done();
    }, retryAfter * 1000);
  }
}
