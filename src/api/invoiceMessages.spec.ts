import InvoiceMessages from './invoiceMessages';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('InvoiceMessages test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('InvoiceMessages is instantiable', () => {
    expect(new InvoiceMessages({})).toBeInstanceOf(InvoiceMessages);
  });
});
