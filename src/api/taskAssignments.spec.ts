import TaskAssignments from './taskAssignments';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('TaskAssignments test', () => {
  let instance;
  let request;
  let id = 1002;

  beforeEach(() => {
    instance = new TaskAssignments(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('TaskAssignments is instantiable', () => {
    expect(instance).toBeInstanceOf(TaskAssignments);
  });

  it('should have a get method that calls the request method', () => {
    instance.get(1000, id);
    expect(request).toBeCalledWith(
      'GET',
      '/v2/projects/1000/task_assignments/1002'
    );
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(1000, query);
    expect(request).toBeCalledWith(
      'GET',
      '/v2/projects/1000/task_assignments',
      query
    );
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(1000, data);
    expect(request).toBeCalledWith(
      'POST',
      '/v2/projects/1000/task_assignments',
      data
    );
  });

  it('should have an update method that calls the request method', () => {
    const query = { is_active: true };
    instance.update(1000, id, query);
    expect(request).toBeCalledWith(
      'PATCH',
      '/v2/projects/1000/task_assignments/1002',
      query
    );
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(1000, id);
    expect(request).toBeCalledWith(
      'DELETE',
      '/v2/projects/1000/task_assignments/1002'
    );
  });
});
