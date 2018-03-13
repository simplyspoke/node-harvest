import InvoicePayments from './invoicePayments';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('InvoicePayments test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('InvoicePayments is instantiable', () => {
    expect(new InvoicePayments({})).toBeInstanceOf(InvoicePayments);
  });
});
