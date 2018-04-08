import {
  TimeEntriesPagenationParameters,
  TimeEntry
} from '../models/timeEntries.models';

// Admin permissions required.
export default class TimeEntriesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = 'v2/time_entries';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: TimeEntriesPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: TimeEntry) {
    return this.harvest.request('POST', this.baseUrl, data);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }

  // Restarting a time entry is only possible if it isn’t currently running.
  // Returns a 200 OK response code if the call succeeded.
  public restart(id) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}/restart`);
  }

  // Stopping a time entry is only possible if it’s currently running.
  // Returns a 200 OK response code if the call succeeded.
  public stop(id) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}/stop`);
  }
}
