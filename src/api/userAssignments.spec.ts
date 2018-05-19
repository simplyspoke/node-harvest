import { UserAssignmentsAPI } from './userAssignments';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('UserAssignments test', () => {
  let instance;
  let request;
  let id = 1003;

  beforeEach(() => {
    instance = new UserAssignmentsAPI(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('UserAssignments is instantiable', () => {
    expect(instance).toBeInstanceOf(UserAssignmentsAPI);
  });

  it('should have a get method that calls the request method', () => {
    instance.get(1000, id);
    expect(request).toBeCalledWith(
      'GET',
      '/v2/projects/1000/user_assignments/1003'
    );
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(1000, query);
    expect(request).toBeCalledWith(
      'GET',
      '/v2/projects/1000/user_assignments',
      query
    );
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(1000, data);
    expect(request).toBeCalledWith(
      'POST',
      '/v2/projects/1000/user_assignments',
      data
    );
  });

  it('should have an update method that calls the request method', () => {
    const query = { is_active: true };
    instance.update(1000, id, query);
    expect(request).toBeCalledWith(
      'PATCH',
      '/v2/projects/1000/user_assignments/1003',
      query
    );
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(1000, id);
    expect(request).toBeCalledWith(
      'DELETE',
      '/v2/projects/1000/user_assignments/1003'
    );
  });
});
