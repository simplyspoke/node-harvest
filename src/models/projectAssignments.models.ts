import { PagenationParameters, PagenationResponse } from './base/pagenation';
import { Project } from './projects.models';
import { Client } from './clients.models';
import { TaskAssignment } from './taskAssignments.models';

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
  project: Project;

  // An object containing the project’s client id and name.
  client: Client;

  // Array of task assignment objects associated with the project.
  // Complete with new model
  task_assignments: TaskAssignment[];

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
  projectAssignments?: ProjectAssignment[];
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
