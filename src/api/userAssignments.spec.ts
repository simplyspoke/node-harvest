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
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new UserAssignments(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('UserAssignments is instantiable', () => {
    expect(instance).toBeInstanceOf(UserAssignments);
  });
});
