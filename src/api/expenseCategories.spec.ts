import ExpenseCategories from './expenseCategories';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('ExpenseCategoriess test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('ExpenseCategoriess is instantiable', () => {
    expect(new ExpenseCategories({})).toBeInstanceOf(ExpenseCategories);
  });
});
