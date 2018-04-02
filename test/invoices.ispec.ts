import Harvest from '../src/index';
import config from './test.config';
import { invoices } from './test.fixture';

fdescribe('The Invoices API', () => {
  let instance;
  let invoice;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  // afterAll((done) => {
  //   instance = new Harvest(config);
  //   instance.invoices
  //     .list()
  //     .then(response => {
  //       const defered = [];
  //
  //       response.invoices.forEach((record) => {
  //         defered.push(instance.invoices.delete(record.id));
  //       })
  //
  //       Promise.all(defered)
  //         .then(() => {
  //           console.log('Cleanup Complete');
  //           done();
  //         })
  //     })
  // });

  // it('should create an invoice', (done) => {
  //   console.log(invoices[0])
  //   instance.invoices
  //     .create(invoices[0])
  //     .then(response => {
  //       expect(response).toBeDefined();
  //       console.log(response)
  //       invoice = response;
  //       done();
  //     })
  // });

  it('should retrieve a list of invoices', done => {
    instance.invoices.list().then(response => {
      expect(response).toBeDefined();
      done();
    });
  });

  // it('should retrieve an invoice', (done) => {
  //   instance.invoices
  //     .get(invoice.id)
  //     .then(response => {
  //       expect(response).toBeDefined();
  //       done();
  //     })
  // });
  //
  // it('should to delete an invoice', (done) => {
  //   instance.invoices
  //     .delete(invoice.id)
  //     .then(response => {
  //       expect(response).toBeDefined();
  //       done();
  //     })
  // });
});
