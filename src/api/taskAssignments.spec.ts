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
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('TaskAssignments is instantiable', () => {
    expect(new TaskAssignments({})).toBeInstanceOf(TaskAssignments);
  });
});
