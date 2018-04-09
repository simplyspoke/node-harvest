import InvoiceItemCategories from './invoiceItemCategories';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('InvoiceItemCategories test', () => {
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new InvoiceItemCategories(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('InvoiceItemCategories is instantiable', () => {
    expect(instance).toBeInstanceOf(InvoiceItemCategories);
  });

  it('should have a get method that calls the request method', () => {
    instance.get(id);
    expect(request).toBeCalledWith('GET', '/v2/invoice_item_categories/1000');
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(query);
    expect(request).toBeCalledWith('GET', '/v2/invoice_item_categories', query);
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(data);
    expect(request).toBeCalledWith('POST', '/v2/invoice_item_categories', data);
  });

  it('should have an update method that calls the request method', () => {
    const query = { is_active: true };
    instance.update(id, query);
    expect(request).toBeCalledWith(
      'PATCH',
      '/v2/invoice_item_categories/1000',
      query
    );
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(id);
    expect(request).toBeCalledWith(
      'DELETE',
      '/v2/invoice_item_categories/1000'
    );
  });
});
