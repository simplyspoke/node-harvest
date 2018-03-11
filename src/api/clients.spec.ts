import Clients from './clients';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Clients test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Clients is instantiable', () => {
    expect(new Clients({})).toBeInstanceOf(Clients);
  });
});
