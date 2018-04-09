import Harvest from '../src/index';
import config from './test.config';

describe('The Estimates API', () => {
  let instance;
  let client;
  let estimate;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - estimates'
      })
      .then(response => {
        client = response;
        done();
      });
  });

  afterAll(done => {
    instance.clients.delete(client.id).then(() => {
      done();
    });
  });

  it('should create an estimate', done => {
    instance.estimates
      .create({
        name: 'Test Estimate',
        currency: 'USD',
        client_id: client.id
      })
      .then(response => {
        expect(response).toBeDefined();
        estimate = response;
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve a list of estimates', done => {
    instance.estimates
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the estimate incase the create failed
        if (!estimate) {
          estimate = response.estimates.find(
            entry => entry.name === 'Test Role'
          );
        }
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve an estimate', done => {
    instance.estimates
      .get(estimate.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should update an estimate', done => {
    instance.estimates
      .update(estimate.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an estimate', done => {
    instance.estimates
      .delete(estimate.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });
});
