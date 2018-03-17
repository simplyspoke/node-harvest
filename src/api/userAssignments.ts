import {
  UserAssignmentsPagenationParameters,
  UserAssignment
} from '../models/userAssignments.models';

// Admin permissions required.
// NOTE: COnsider refactoring this into the user class prior to release.
export default class UserAssignmentsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/projects';
    this.harvest = harvest;
  }

  public list(projectId: number, query: UserAssignmentsPagenationParameters) {
    return this.harvest.request(
      'GET',
      `${this.baseUrl}/${projectId}/user_assignments`,
      query
    );
  }

  public create(projectId: number, data: UserAssignment) {
    return this.harvest.request('POST', `/${projectId}/user_assignments`, data);
  }

  public get(projectId: number, id: number) {
    return this.harvest.request(
      'GET',
      `${this.baseUrl}/${projectId}/user_assignments/${id}`
    );
  }

  public update(projectId: number, id: number, data) {
    return this.harvest.request(
      'PATCH',
      `${this.baseUrl}/${projectId}/user_assignments/${id}`,
      data
    );
  }

  public delete(projectId: number, id: number) {
    return this.harvest.request(
      'DELETE',
      `${this.baseUrl}/${projectId}/user_assignments/${id}`
    );
  }
}
