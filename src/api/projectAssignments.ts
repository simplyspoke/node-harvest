import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required.
// NOTE: COnsider refactoring this into the user class prior to release.
export default class ProjectAssignmentsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/users/';
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

/**
 * An response from the ProjectAssignments API
 */
export interface ProjectAssignment {
  // integer Unique ID for the projectAssignments.
  id: number;

  // Whether the projectAssignments is active or archived.
  is_active: boolean;

  // Determines if the user has project manager permissions for the project.
  is_project_manager: boolean;

  // Rate used when the project’s bill_by is People.
  // Type: decimal
  hourly_rate: number;

  // Budget used when the project’s budget_by is person.
  // Type: decimal
  budget: number;

  // An object containing the assigned project id, name, and code.
  project: object;

  // An object containing the project’s client id and name.
  client: object;

  // Array of task assignment objects associated with the project.
  // Complete with new model
  task_assignments: any[];

  // Date and time the projectAssignments was created.
  // Type: datetime
  created_at: string;

  // Date and time the projectAssignments was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * Response
 */
export interface ProjectAssignmentsPagenationResponse
  extends PagenationParameters {
  // A list of projectAssignments for the specified query.
  projectAssignments: ProjectAssignment[];
}

/**
 * ProjectAssignments query parameters
 */
export interface ProjectAssignmentsPagenationParameters
  extends PagenationParameters {
  /**
   * Pass true to only return active projectAssignments and false to return inactive projectAssignments
   * Type: datetime.
   */
  updated_since: string;
}
