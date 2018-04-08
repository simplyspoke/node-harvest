import Harvest from '../src/index';
import config from './test.config';
import { users } from './test.fixture';

describe('The Users API', () => {
  let instance;
  let user;

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
      .catch(() => {
        fail();
      });
  });

  it('should create an user', done => {
    instance.users
      .create({
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com'
      })
      .then(response => {
        // NOTE: Not able to test on a free account, so commenting out.
        // expect(response).toBeDefined();
        // user = response;
        // done();
      })
      .catch(error => {
        expect(error).toBeDefined();
        done();
        // fail();
      });
  });

  it('should retrieve a list of users', done => {
    instance.users
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the role incase the create failed
        // if (!user) {
        //   user = response.find((entry) => entry.email === 'test@example.com');
        // }
        user = response.users[0];
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should retrieve an user', done => {
    instance.users
      .get(user.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should update an user', done => {
    instance.users
      .update(user.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should to delete an user', done => {
    instance.users
      .delete(user.id)
      .then(response => {
        // NOTE: Not able to test on a free account, so commenting out
        // expect(response).toBeDefined();
        // done();
      })
      .catch(error => {
        expect(error).toBeDefined();
        done();
        // fail();
      });
  });
});
