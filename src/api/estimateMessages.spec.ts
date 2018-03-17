import EstimateMessages from './estimateMessages';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('EstimateMessages test', () => {
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new EstimateMessages(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('EstimateMessages is instantiable', () => {
    expect(instance).toBeInstanceOf(EstimateMessages);
  });
});
