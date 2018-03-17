import {
  TaskAssignmentsPagenationParameters,
  TaskAssignment
} from '../models/taskAssignments.models';

// Admin permissions required.
// NOTE: COnsider refactoring this into the task class prior to release.
export default class TaskAssignmentsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/projects';
    this.harvest = harvest;
  }

  public list(projectId: number, query: TaskAssignmentsPagenationParameters) {
    return this.harvest.request(
      'GET',
      `${this.baseUrl}/${projectId}/task_assignments`,
      query
    );
  }

  public create(projectId: number, data: TaskAssignment) {
    return this.harvest.request(
      'POST',
      `${this.baseUrl}/${projectId}/task_assignments`,
      data
    );
  }

  public get(projectId: number, id: number) {
    return this.harvest.request(
      'GET',
      `${this.baseUrl}/${projectId}/task_assignments/${id}`
    );
  }

  public update(projectId: number, id: number, data) {
    return this.harvest.request(
      'PATCH',
      `${this.baseUrl}/${projectId}/task_assignments/${id}`,
      data
    );
  }

  public delete(projectId: number, id: number) {
    return this.harvest.request(
      'DELETE',
      `${this.baseUrl}/${projectId}/task_assignments/${id}`
    );
  }
}
