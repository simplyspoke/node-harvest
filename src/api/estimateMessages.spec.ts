import EstimateMessages from './estimateMessages';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('EstimateMessages test', () => {
  let instance;
  let request;
  let id = 1004;

  beforeEach(() => {
    instance = new EstimateMessages(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('EstimateMessages is instantiable', () => {
    expect(instance).toBeInstanceOf(EstimateMessages);
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(1000, query);
    expect(request).toBeCalledWith('GET', '/v2/estimates/1000/messages', query);
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(1000, data);
    expect(request).toBeCalledWith('POST', '/v2/estimates/1000/messages', data);
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(1000, id);
    expect(request).toBeCalledWith(
      'DELETE',
      '/v2/estimates/1000/messages/1004'
    );
  });
});
