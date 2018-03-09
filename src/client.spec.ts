import Client from './client';
import Authentication from './authentication';
import axios from 'axios';

jest.mock('./authentication');
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
    expect(new Client({})).toBeInstanceOf(Client);
  });

  describe('push method', () => {
    it('should call the client push method with the request', () => {
      spyOn(instance.queue, 'push');
      const task = { test: true };
      instance.push(task);
      expect(instance.queue.push).toHaveBeenCalledWith(task);
    });
  });
});
