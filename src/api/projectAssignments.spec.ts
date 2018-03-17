import ProjectAssignments from './projectAssignments';

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
    instance = new ProjectAssignments(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('ProjectAssignments is instantiable', () => {
    expect(instance).toBeInstanceOf(ProjectAssignments);
  });
});
