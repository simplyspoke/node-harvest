import Harvest from '../src/index';
import config from './test.config';

const recipients = [
  {
    name: 'Bob Powell',
    email: 'bobpowell@example.com'
  }
];

describe('The Invoice Payments API', () => {
  let instance;
  let client;
  let invoice;
  let payment;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - invoicePayments'
      })
      .then(response => {
        client = response;
        instance.invoices
          .create({
            name: 'Test Invoice - invoicePayments',
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
    instance.invoices.delete(invoice.id).then(() => {
      instance.clients.delete(client.id).then(() => {
        done();
      });
    });
  });

  it('should create an Invoice Payment', done => {
    instance.invoicePayments
      .create(invoice.id, {
        amount: 0.1,
        paid_date: '2017-07-24T13:32:18Z'
      })
      .then(response => {
        expect(response).toBeDefined();
        payment = response;
        done();
      })
      .catch(error => {
        console.log(error);
        fail();
      });
  });

  it('should retrieve a list of Invoice Payments', done => {
    instance.invoicePayments
      .list(invoice.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an Invoice Payment', done => {
    instance.invoicePayments
      .delete(invoice.id, payment.id)
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
