import { TimeEntriesAPI } from './timeEntries';

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
    instance = new TimeEntriesAPI(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('TimeEntries is instantiable', () => {
    expect(instance).toBeInstanceOf(TimeEntriesAPI);
  });

  it('should have a get method that calls the request method', () => {
    instance.get(id);
    expect(request).toBeCalledWith('GET', '/v2/time_entries/1000');
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(query);
    expect(request).toBeCalledWith('GET', '/v2/time_entries', query);
  });

  it('should have a list method that calls the request method with a default set', () => {
    instance.list();
    expect(request).toBeCalledWith('GET', '/v2/time_entries', {});
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(data);
    expect(request).toBeCalledWith('POST', '/v2/time_entries', data);
  });

  it('should have an update method that calls the request method', () => {
    const query = { is_active: true };
    instance.update(id, query);
    expect(request).toBeCalledWith('PATCH', '/v2/time_entries/1000', query);
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(id);
    expect(request).toBeCalledWith('DELETE', '/v2/time_entries/1000');
  });

  it('should have a restart method that calls the request method', () => {
    instance.restart(id);
    expect(request).toBeCalledWith('PATCH', '/v2/time_entries/1000/restart');
  });

  it('should have a stop method that calls the request method', () => {
    instance.stop(id);
    expect(request).toBeCalledWith('PATCH', '/v2/time_entries/1000/stop');
  });
});
