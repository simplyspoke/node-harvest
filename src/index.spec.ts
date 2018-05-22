import Harvest from './index';
import { RequestClient } from './client';

jest.mock('./client');

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
describe('Harvest test', () => {
  let instance;

  beforeEach(() => {
    instance = new Harvest(config);
  });

  it('Harvest is instantiable', () => {
    expect(instance).toBeInstanceOf(Harvest);
  });

  describe('request method', () => {
    it('should return a Promise', () => {
      expect(
        instance.request({ method: 'string', uri: 'string', data: 'any' })
      ).toBeInstanceOf(Promise);
    });

    it('should recieve data and send it to the callback', done => {
      spyOn(instance.client, 'push').and.callFake(function({
        method,
        uri,
        data,
        callback
      }) {
        callback(null, true);
      });
      instance
        .request({ method: 'string', uri: 'string', data: 'any' })
        .then(results => {
          expect(results).toBeTruthy();
          done();
        });
    });

    it('should catch an error and send it to the callback', done => {
      spyOn(instance.client, 'push').and.callFake(function({
        method,
        uri,
        data,
        callback
      }) {
        callback(true, null);
      });
      instance
        .request({ method: 'string', uri: 'string', data: 'any' })
        .catch(error => {
          expect(error).toBeTruthy();
          done();
        });
    });
  });
});
