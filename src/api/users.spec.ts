import Users from './users';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Users test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Users is instantiable', () => {
    expect(new Users({})).toBeInstanceOf(Users);
  });
});
