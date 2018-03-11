import Expenses from './expenses';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Expenses test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Expenses is instantiable', () => {
    expect(new Expenses({})).toBeInstanceOf(Expenses);
  });
});
