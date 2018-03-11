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
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('ProjectAssignments is instantiable', () => {
    expect(new ProjectAssignments({})).toBeInstanceOf(ProjectAssignments);
  });
});
