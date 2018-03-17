import InvoiceMessages from './invoiceMessages';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('InvoiceMessages test', () => {
  let instance;
  let request;
  let id = 1005;

  beforeEach(() => {
    instance = new InvoiceMessages(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('InvoiceMessages is instantiable', () => {
    expect(instance).toBeInstanceOf(InvoiceMessages);
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(1000, query);
    expect(request).toBeCalledWith('GET', '/v2/invoices/1000/messages', query);
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(1000, data);
    expect(request).toBeCalledWith('POST', '/v2/invoices/1000/messages', data);
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(1000, id);
    expect(request).toBeCalledWith('DELETE', '/v2/invoices/1000/messages/1005');
  });
});
