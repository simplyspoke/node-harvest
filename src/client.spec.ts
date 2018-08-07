import * as Request from 'request-promise';
import { RequestClient } from './client';

const config = {
  subdomain: process.env.SUBDOMAIN,
  userAgent: 'Harvest API Example',
  auth: {
    accessToken: process.env.ACCESS_TOKEN,
    accountId: process.env.ACCOUNT_ID
  }
};

jest.useFakeTimers();

/**
 * Dummy test
 */
describe('Client test', () => {
  let instance;

  beforeEach(() => {
    instance = new RequestClient(config);
  });

  it('Client is instantiable', () => {
    expect(instance).toBeInstanceOf(RequestClient);
  });

  describe('preprocess method', () => {
    it('should return an object with a headers and data property', () => {
      const response = { headers: true };
      const body = true;
      const actual = instance.preprocess(body, response);
      expect(actual.headers).toBeTruthy();
      expect(actual.data).toBeTruthy();
    });
  });

  describe('push method', () => {
    it('should call the client push method with the request', () => {
      jest.spyOn(instance.queue, 'push');
      const task = { test: true };
      instance.push(task);
      expect(instance.queue.push).toHaveBeenCalledWith(task);
    });
  });

  describe('requestGenerator method', () => {
    let generated;

    beforeEach(() => {
      generated = instance.requestGenerator();
    });

    it('should return a function', () => {
      expect(generated).toBeInstanceOf(Function);
    });

    it('should recieve data and send it to the callback', done => {
      instance.request = jest.fn().mockResolvedValue({
        headers: true,
        data: true
      });
      const task = {
        method: 'string',
        uri: 'string',
        data: 'any',
        callback: (error, results) => {
          expect(error).toBeUndefined();
          expect(results).toBeTruthy();
        }
      };
      generated(task, () => {
        done();
      });
    });

    it('should recieve an error and send it to the callback', () => {
      instance.request = jest.fn().mockRejectedValue(true);
      const task = {
        method: 'string',
        uri: 'string',
        data: 'any',
        callback: (error, results) => {
          expect(error).toBeTruthy();
          expect(results).toBeUndefined();
        }
      };
      return generated(task, jest.fn());
    });

    it('should call the retryAfter method after an error with a 429 status is recieved', () => {
      const task = {
        method: 'string',
        uri: 'string',
        data: 'any',
        callback: undefined
      };
      const retryAfter = 15;
      const complete = jest.fn();
      instance.request = jest.fn().mockRejectedValue({
        statusCode: 429,
        response: { headers: { 'retry-after': retryAfter } }
      });
      instance.retryAfter = jest.fn().mockImplementation(() => {
        expect(instance.retryAfter).toHaveBeenCalledWith(
          task,
          retryAfter,
          complete
        );
      });
      return generated(task, complete);
    });
  });

  describe('retryAfter method', () => {
    const complete = jest.fn();
    let pause;
    let push;
    let resume;

    beforeEach(() => {
      instance.queue.pause = jest.fn();
      instance.queue.unshift = jest.fn();
      instance.queue.resume = jest.fn();
    });

    it('should pause the queue and unshift the task on to it', () => {
      const task = {
        callback: jest.fn()
      };
      instance.retryAfter(task, 15, complete);
      expect(instance.queue.pause).toHaveBeenCalled();
      expect(instance.queue.unshift).toHaveBeenCalled();
      expect(task.callback).not.toHaveBeenCalled();
    });

    it('should resume the queue after the timeout is over', () => {
      const task = {
        callback: jest.fn()
      };
      const retryAfter = 0.15;
      instance.retryAfter(task, retryAfter, complete);

      jest.advanceTimersByTime(retryAfter * 1000);

      expect(instance.queue.resume).toHaveBeenCalled();
    });
  });
});
