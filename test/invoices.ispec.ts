import Harvest from '../src/index';
import config from './test.config';
import { invoices } from './test.fixture';

fdescribe('The Invoices API', () => {
  let instance;
  let client;
  let invoice;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - invoices'
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

  it('should create an invoice', done => {
    instance.invoices
      .create({
        bill_by: 'none',
        budget_by: 'none',
        client_id: client.id,
        is_billable: true,
        name: 'Test Project'
      })
      .then(response => {
        expect(response).toBeDefined();
        invoice = response;
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve a list of invoices', done => {
    instance.invoices
      .list()
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve an invoice', done => {
    instance.invoices
      .get(invoice.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should update an invoice', done => {
    instance.invoices
      .update(invoice.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an invoice', done => {
    instance.invoices
      .delete(invoice.id)
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
