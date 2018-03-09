import Harvest from './harvest';
import Client from './client';

jest.mock('./client');

/**
 * Dummy test
 */
describe('Harvest test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Harvest is instantiable', () => {
    expect(new Harvest({})).toBeInstanceOf(Harvest);
  });
});
