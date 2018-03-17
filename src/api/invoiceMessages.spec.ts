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
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new InvoiceMessages(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('InvoiceMessages is instantiable', () => {
    expect(instance).toBeInstanceOf(InvoiceMessages);
  });
});
