import { ProjectAssignmentsAPI } from './projectAssignments';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('ProjectAssignments test', () => {
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new ProjectAssignmentsAPI(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('ProjectAssignments is instantiable', () => {
    expect(instance).toBeInstanceOf(ProjectAssignmentsAPI);
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(id, query);
    expect(request).toBeCalledWith(
      'GET',
      '/v2/users/1000/project_assignments',
      query
    );
  });

  it('should have a me method that calls the request method', () => {
    const query = { is_active: true };
    instance.me(query);
    expect(request).toBeCalledWith(
      'GET',
      '/v2/users/me/project_assignments',
      query
    );
  });
});
