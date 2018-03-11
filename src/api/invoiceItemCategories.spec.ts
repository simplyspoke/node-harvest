import InvoiceItemCategories from './invoiceItemCategories';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('InvoiceItemCategories test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('InvoiceItemCategories is instantiable', () => {
    expect(new InvoiceItemCategories({})).toBeInstanceOf(InvoiceItemCategories);
  });
});
