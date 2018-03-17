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
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new TimeEntries(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('TimeEntries is instantiable', () => {
    expect(instance).toBeInstanceOf(TimeEntries);
  });
});
