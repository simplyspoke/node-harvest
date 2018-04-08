import Harvest from '../src/index';
import config from './test.config';
import { roles } from './test.fixture';

describe('The Roles API', () => {
  let instance;
  let role;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  it('should create an role', done => {
    instance.roles
      .create({ name: 'Test Role' })
      .then(response => {
        expect(response).toBeDefined();
        role = response;
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should retrieve a list of roles', done => {
    instance.roles
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the role incase the create failed
        if (!role) {
          role = response.roles.find(entry => entry.name === 'Test Role');
        }
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should retrieve an role', done => {
    instance.roles
      .get(role.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should update an role', done => {
    instance.roles
      .update(role.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should to delete an role', done => {
    instance.roles
      .delete(role.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });
});
