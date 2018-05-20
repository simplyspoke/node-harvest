import {
  ProjectsPagenationParameters,
  Project
} from '../models/projects.models';

// Admin permissions required.
export class ProjectsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/projects';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: ProjectsPagenationParameters = {}) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: Project) {
    return this.harvest.request('POST', this.baseUrl, data);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }
}
