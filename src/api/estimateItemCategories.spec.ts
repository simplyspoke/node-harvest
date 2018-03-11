import EstimateItemCategories from './estimateItemCategories';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('EstimateItemCategories test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('EstimateItemCategories is instantiable', () => {
    expect(new EstimateItemCategories({})).toBeInstanceOf(
      EstimateItemCategories
    );
  });
});
