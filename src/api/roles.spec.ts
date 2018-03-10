import Roles from './roles';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Roles test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Roles is instantiable', () => {
    expect(new Roles({})).toBeInstanceOf(Roles);
  });
});
