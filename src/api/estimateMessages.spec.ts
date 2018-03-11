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
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('EstimateMessages is instantiable', () => {
    expect(new EstimateMessages({})).toBeInstanceOf(EstimateMessages);
  });
});
