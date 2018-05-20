import { InvoicePaymentsAPI } from './invoicePayments';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('InvoicePayments test', () => {
  let instance;
  let request;
  let id = 1001;

  beforeEach(() => {
    instance = new InvoicePaymentsAPI(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('InvoicePayments is instantiable', () => {
    expect(instance).toBeInstanceOf(InvoicePaymentsAPI);
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(1000, query);
    expect(request).toBeCalledWith('GET', '/v2/invoices/1000/payments', query);
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(1000, data);
    expect(request).toBeCalledWith('POST', '/v2/invoices/1000/payments', data);
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(1000, id);
    expect(request).toBeCalledWith('DELETE', '/v2/invoices/1000/payments/1001');
  });
});
