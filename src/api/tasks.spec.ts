import Tasks from './tasks';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Tasks test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Tasks is instantiable', () => {
    expect(new Tasks({})).toBeInstanceOf(Tasks);
  });
});
