import Harvest from '../src/index';
import config from './test.config';

describe('The Company API', () => {
  let instance;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  it('Can retrieve the Company record without erroring', done => {
    instance.company
      .get()
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });
});
