import Estimates from './estimates';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Estimates test', () => {
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new Estimates(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('Estimates is instantiable', () => {
    expect(instance).toBeInstanceOf(Estimates);
  });

  it('should have a get method that calls the request method', () => {
    instance.get(id);
    expect(request).toBeCalledWith('GET', '/v2/estimates/1000');
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(query);
    expect(request).toBeCalledWith('GET', '/v2/estimates', query);
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(data);
    expect(request).toBeCalledWith('POST', '/v2/estimates', data);
  });

  it('should have an update method that calls the request method', () => {
    const query = { is_active: true };
    instance.update(id, query);
    expect(request).toBeCalledWith('PATCH', '/v2/estimates/1000', query);
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(id);
    expect(request).toBeCalledWith('DELETE', '/v2/estimates/1000');
  });

  it('should have a send method that calls the request method', () => {
    instance.send(id);
    expect(request).toBeCalledWith('POST', '/v2/estimates/1000/messages', {
      event_type: 'send'
    });
  });

  it('should have an accept method that calls the request method', () => {
    instance.accept(id);
    expect(request).toBeCalledWith('POST', '/v2/estimates/1000/messages', {
      event_type: 'accept'
    });
  });

  it('should have a decline method that calls the request method', () => {
    instance.decline(id);
    expect(request).toBeCalledWith('POST', '/v2/estimates/1000/messages', {
      event_type: 'decline'
    });
  });

  it('should have a reopen method that calls the request method', () => {
    instance.reopen(id);
    expect(request).toBeCalledWith('POST', '/v2/estimates/1000/messages', {
      event_type: 're-open'
    });
  });
});
