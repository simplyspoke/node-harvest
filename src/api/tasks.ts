import { TasksPagenationParameters, Task } from '../models/tasks.models';

// Admin permissions required.
// NOTE: Consider refactoring this into the user class prior to release.
export class TasksAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/tasks';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: TasksPagenationParameters = {}) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: Task) {
    return this.harvest.request('POST', this.baseUrl, data);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }
}
