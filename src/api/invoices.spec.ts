import Invoices from './invoices';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Invoices test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Invoices is instantiable', () => {
    expect(new Invoices({})).toBeInstanceOf(Invoices);
  });
});
