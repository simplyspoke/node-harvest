import { PagenationParameters, PagenationResponse } from './base/pagenation';

/**
 * An response from the UserAssignments API
 */
export interface UserAssignment {
  // integer Unique ID for the userAssignments.
  id: number;

  // An object containing the id and name of the associated user.
  user: object;

  // Whether the userAssignments is active or archived.
  is_active: boolean;

  // Determines if the user has project manager permissions for the project.
  is_project_manager: boolean;

  // Rate used when the project’s bill_by is People.
  // Type: decimal
  hourly_rate: number;

  // Budget used when the project’s budget_by is person.
  // Type: decimal
  budget: number;

  // Date and time the userAssignments was created.
  // Type: datetime
  created_at: string;

  // Date and time the userAssignments was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * Response
 */
export interface UserAssignmentsPagenationResponse
  extends PagenationParameters {
  // A list of userAssignments for the specified query.
  userAssignments: UserAssignment[];
}

/**
 * UserAssignments query parameters
 */
export interface UserAssignmentsPagenationParameters
  extends PagenationParameters {
  /**
   * Pass true to only return active user assignments and false to return inactive user assignments.
   */
  is_active: boolean;

  /**
   * Pass true to only return active userAssignments and false to return inactive userAssignments
   * Type: datetime.
   */
  updated_since: string;
}
