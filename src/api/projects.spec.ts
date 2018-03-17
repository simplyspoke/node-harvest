import Projects from './projects';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Projects test', () => {
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new Projects(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('Projects is instantiable', () => {
    expect(instance).toBeInstanceOf(Projects);
  });

  it('should have a get method that calls the request method', () => {
    instance.get(id);
    expect(request).toBeCalledWith('GET', '/v2/projects/1000');
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(query);
    expect(request).toBeCalledWith('GET', '/v2/projects', query);
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(data);
    expect(request).toBeCalledWith('POST', '/v2/projects', data);
  });

  it('should have an update method that calls the request method', () => {
    const query = { is_active: true };
    instance.update(id, query);
    expect(request).toBeCalledWith('PATCH', '/v2/projects/1000', query);
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(id);
    expect(request).toBeCalledWith('DELETE', '/v2/projects/1000');
  });
});
