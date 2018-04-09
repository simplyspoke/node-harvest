import Harvest from '../src/index';
import config from './test.config';

describe('The Client API', () => {
  let instance;
  let client;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  it('should create a client', done => {
    instance.clients
      .create({
        name: 'Test Client'
      })
      .then(response => {
        expect(response).toBeDefined();
        client = response;
        done();
      })
      .catch(error => {
        console.log(error);
        fail();
      });
  });

  it('should retrieve a list of clients', done => {
    instance.clients
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the estimate incase the create failed
        if (!client) {
          client = response.clients.find(entry => entry.name === 'Test Client');
        }
        done();
      })
      .catch(error => {
        console.log(error);
        fail();
      });
  });

  it('should retrieve an client', done => {
    instance.clients
      .get(client.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should update an client', done => {
    instance.clients
      .update(client.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an client', done => {
    instance.clients
      .delete(client.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.log(error);
        fail();
      });
  });
});
