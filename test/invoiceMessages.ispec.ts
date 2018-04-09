import Harvest from '../src/index';
import config from './test.config';

const recipients = [
  {
    name: 'Bob Powell',
    email: 'bobpowell@example.com'
  }
];

describe('The Invoice Messages API', () => {
  let instance;
  let client;
  let invoice;
  let message;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - invoiceMessages'
      })
      .then(response => {
        client = response;
        instance.invoices
          .create({
            name: 'Test Invoice - invoiceMessages',
            currency: 'USD',
            client_id: client.id
          })
          .then(response => {
            invoice = response;
            done();
          })
          .catch(error => {
            console.log(error);
            done();
          });
      });
  });

  afterAll(done => {
    instance.invoice.delete(invoice.id).then(() => {
      instance.client
        .delete(client.id)
        .then(() => {
          done();
        })
        .catch(error => {
          console.log(error);
          done();
        });
    });
  });

  it('should create an Invoice Message', done => {
    instance.invoiceMessages
      .create(invoice.id, {
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

  it('should retrieve a list of Invoice Messages', done => {
    instance.invoiceMessages
      .list(invoice.id)
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the category incase the create failed
        if (!message) {
          message = response.invoice_messages.find(
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

  it('should to delete an Invoice Message', done => {
    instance.invoiceMessages
      .delete(invoice.id, message.id)
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
