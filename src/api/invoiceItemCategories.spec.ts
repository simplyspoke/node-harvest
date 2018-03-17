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
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new InvoiceItemCategories(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('InvoiceItemCategories is instantiable', () => {
    expect(instance).toBeInstanceOf(InvoiceItemCategories);
  });
});
