import * as Request from 'request-promise';
import RequestClient from './client';

const config = {
  subdomain: process.env.SUBDOMAIN,
  userAgent: 'Harvest API Example',
  auth: {
    accessToken: process.env.ACCESS_TOKEN,
    accountId: process.env.ACCOUNT_ID
  }
};

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
      spyOn(instance.queue, 'push');
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
      spyOn(instance, 'request').and.callFake(() =>
        Promise.resolve({ headers: true, data: true })
      );
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

    it('should recieve an error and send it to the callback', done => {
      spyOn(instance, 'request').and.callFake(() => Promise.reject(true));
      const task = {
        method: 'string',
        uri: 'string',
        data: 'any',
        callback: (error, results) => {
          expect(error).toBeTruthy();
          expect(results).toBeUndefined();
        }
      };
      generated(task, () => {
        done();
      });
    });

    it('should call the retryAfter method after an error with a 429 status is recieved', done => {
      const task = {
        method: 'string',
        uri: 'string',
        data: 'any',
        callback: undefined
      };
      const complete = jasmine.createSpy();
      spyOn(instance, 'request').and.callFake(() =>
        Promise.reject({
          statusCode: 429,
          response: { headers: { 'retry-after': 10 } }
        })
      );
      spyOn(instance, 'retryAfter').and.callFake(() => {
        expect(instance.retryAfter).toHaveBeenCalledWith(task, 10, complete);
        done();
      });
      generated(task, complete);
    });
  });

  describe('retryAfter method', () => {
    const complete = jasmine.createSpy();
    let pause;
    let push;
    let resume;

    beforeEach(() => {
      pause = spyOn(instance.queue, 'pause').and.callFake(() => true);
      push = spyOn(instance.queue, 'push').and.callFake(() => true);
      resume = spyOn(instance.queue, 'resume').and.callFake(() => true);
    });

    it('should pause the queue and push the task on to it', () => {
      const task = {
        callback: timeout => {
          expect(timeout).toEqual('Retry after: 15');
        }
      };
      instance.retryAfter(task, 15, complete);
      expect(instance.queue.pause).toHaveBeenCalled();
      expect(instance.queue.push).toHaveBeenCalled();
    });

    it('should resume the queue after the timeout is over', done => {
      const task = {
        callback: jasmine.createSpy()
      };
      instance.retryAfter(task, 15, complete);
      setTimeout(() => {
        expect(instance.queue.resume).toHaveBeenCalled();
        done();
      }, 20);
    });
  });
});
