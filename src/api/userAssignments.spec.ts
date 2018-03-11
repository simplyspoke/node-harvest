import UserAssignments from './userAssignments';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('UserAssignments test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('UserAssignments is instantiable', () => {
    expect(new UserAssignments({})).toBeInstanceOf(UserAssignments);
  });
});
