import { InvoicesAPI } from './invoices';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Invoices test', () => {
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new InvoicesAPI(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('Invoices is instantiable', () => {
    expect(instance).toBeInstanceOf(InvoicesAPI);
  });

  it('should have a get method that calls the request method', () => {
    instance.get(id);
    expect(request).toBeCalledWith('GET', '/v2/invoices/1000');
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(query);
    expect(request).toBeCalledWith('GET', '/v2/invoices', query);
  });

  it('should have a list method that calls the request method with a default set', () => {
    instance.list();
    expect(request).toBeCalledWith('GET', '/v2/invoices', {});
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(data);
    expect(request).toBeCalledWith('POST', '/v2/invoices', data);
  });

  it('should have an update method that calls the request method', () => {
    const query = { is_active: true };
    instance.update(id, query);
    expect(request).toBeCalledWith('PATCH', '/v2/invoices/1000', query);
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(id);
    expect(request).toBeCalledWith('DELETE', '/v2/invoices/1000');
  });

  it('should have a draft method that calls the request method', () => {
    instance.draft(id);
    expect(request).toBeCalledWith('POST', '/v2/invoices/1000/messages', {
      event_type: 'draft'
    });
  });

  it('should have a send method that calls the request method', () => {
    instance.send(id);
    expect(request).toBeCalledWith('POST', '/v2/invoices/1000/messages', {
      event_type: 'send'
    });
  });

  it('should have a close method that calls the request method', () => {
    instance.close(id);
    expect(request).toBeCalledWith('POST', '/v2/invoices/1000/messages', {
      event_type: 'close'
    });
  });

  it('should have a reopen method that calls the request method', () => {
    instance.reopen(id);
    expect(request).toBeCalledWith('POST', '/v2/invoices/1000/messages', {
      event_type: 're-open'
    });
  });
});
