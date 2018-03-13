import TimeEntries from './timeEntries';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('TimeEntries test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('TimeEntries is instantiable', () => {
    expect(new TimeEntries({})).toBeInstanceOf(TimeEntries);
  });
});
