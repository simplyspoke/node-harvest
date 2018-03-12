import { PagenationParameters, PagenationResponse } from '../types/pagenation';

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
    return this.harvest.request('POST', `/${projectId}/task_assignments`, data);
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

/**
 * An response from the TaskAssignments API
 */
export interface TaskAssignment {
  // integer Unique ID for the taskAssignments.
  id: number;

  // An object containing the id and name of the associated task.
  task: object;

  // Whether the task assignment is active or archived.
  is_active: boolean;

  // Whether the task assignment is billable or not. For example: if set to true, all time tracked on this project for the associated task will be marked as billable.
  billable: boolean;

  // Rate used when the project’s bill_by is Tasks.
  // Type: decimal
  hourly_rate: number;

  // Budget used when the project’s budget_by is person.
  // Type: decimal
  budget: number;

  // Date and time the task assignment was created.
  // Type: datetime
  created_at: string;

  // Date and time the task assignment was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * Response
 */
export interface TaskAssignmentsPagenationResponse
  extends PagenationParameters {
  // A list of task assignments for the specified query.
  taskAssignments: TaskAssignment[];
}

/**
 * TaskAssignments query parameters
 */
export interface TaskAssignmentsPagenationParameters
  extends PagenationParameters {
  /**
   * Pass true to only return active task assignments and false to return inactive task assignments.
   */
  is_active: boolean;

  /**
   * Pass true to only return active taskAssignments and false to return inactive taskAssignments
   * Type: datetime.
   */
  updated_since: string;
}
