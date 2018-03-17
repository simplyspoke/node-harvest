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
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new EstimateItemCategories(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('EstimateItemCategories is instantiable', () => {
    expect(instance).toBeInstanceOf(EstimateItemCategories);
  });
});
