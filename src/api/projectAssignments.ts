import { PagenationParameters } from '../models/base/pagenation';
import { ProjectAssignmentsPagenationParameters } from '../models/projectAssignments.models';

// Admin permissions required.
// NOTE: COnsider refactoring this into the user class prior to release.
export default class ProjectAssignmentsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/users';
    this.harvest = harvest;
  }

  public list(id: number, query: ProjectAssignmentsPagenationParameters) {
    return this.harvest.request(
      'GET',
      `${this.baseUrl}/${id}/project-assignments`,
      query
    );
  }

  // List all project assignments for the currently authenticated user
  // TODO: COnsider handling defaults
  public me(query: PagenationParameters) {
    return this.harvest.request(
      'GET',
      `${this.baseUrl}/me/project-assignments`,
      query
    );
  }
}
