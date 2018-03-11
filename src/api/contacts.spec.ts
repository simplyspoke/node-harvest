import Contacts from './contacts';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Contacts test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Contacts is instantiable', () => {
    expect(new Contacts({})).toBeInstanceOf(Contacts);
  });
});
