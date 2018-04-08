import Harvest from '../src/index';
import config from './test.config';

describe('The User Project Assignments API', () => {
  let instance;
  let user;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.request('GET', 'v2/users/me', {}).then(response => {
      user = response;
      done();
    });
  });

  it('should retrieve the me users project assignments without returning an error', done => {
    instance.projectAssignments
      .me()
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should retrieve a list of project assignments for a given user', done => {
    instance.projectAssignments
      .list(user.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });
});
