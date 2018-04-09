import Harvest from '../src/index';
import config from './test.config';

const recipients = [
  {
    name: 'Bob Powell',
    email: 'bobpowell@example.com'
  }
];

describe('The Estimate Messages API', () => {
  let instance;
  let client;
  let estimate;
  let message;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - estimateMessages'
      })
      .then(response => {
        client = response;
        instance.estimates
          .create({
            name: 'Test Estimate - estimateMessages',
            currency: 'USD',
            client_id: client.id
          })
          .then(response => {
            estimate = response;
            done();
          })
          .catch(error => {
            console.log(error);
          });
      });
  });

  afterAll(done => {
    instance.estimates.delete(estimate.id).then(() => {
      instance.clients.delete(client.id).then(() => {
        done();
      });
    });
  });

  it('should create an Estimate Message', done => {
    instance.estimateMessages
      .create(estimate.id, {
        recipients
      })
      .then(response => {
        expect(response).toBeDefined();
        message = response;
        done();
      })
      .catch(error => {
        console.log(error);
        fail();
      });
  });

  it('should retrieve a list of Estimate Messages', done => {
    instance.estimateMessages
      .list(estimate.id)
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the category incase the create failed
        if (!message) {
          message = response.estimate_messages.find(
            entry => entry.recipients === recipients
          );
        }
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an Estimate Message', done => {
    instance.estimateMessages
      .delete(estimate.id, message.id)
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
