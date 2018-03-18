import * as Request from 'request-promise';
import Client from './client';
import { assign, cloneDeep } from 'lodash';

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
    instance = new Client(config);
  });

  it('Client is instantiable', () => {
    expect(instance).toBeInstanceOf(Client);
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
          expect(error).toBeNull();
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
          expect(results).toBeNull();
        }
      };
      generated(task, () => {
        done();
      });
    });
  });
});
