import Harvest from '../src/index';
import config from './test.config';

describe('The Users API', () => {
  let instance;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  it('should retrieve the me User record without returning an error', done => {
    instance
      .request('GET', 'v2/users/me', {})
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        expect(error).toBeNull();
        done();
      });
  });
});
