import Estimates from './estimates';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Estimates test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Estimates is instantiable', () => {
    expect(new Estimates({})).toBeInstanceOf(Estimates);
  });
});
