import ExpenseCategories from './expenseCategories';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('ExpenseCategories test', () => {
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new ExpenseCategories(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('ExpenseCategories is instantiable', () => {
    expect(instance).toBeInstanceOf(ExpenseCategories);
  });
});
