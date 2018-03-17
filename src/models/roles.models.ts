import { PagenationParameters, PagenationResponse } from './base/pagenation';

/**
 * An response from the Roles API
 */
export interface Role {
  // integer Unique ID for the role.
  id: number;

  // The name of the role.
  name: string;

  // The IDs of the users assigned to this role. array of integers
  user_ids: number[];

  // Date and time the role was created.
  created_at: string; // datetime

  // Date and time the role was last updated.
  updated_at: string; // datetime
}

/**
 * Response
 */
export interface RolesPagenationResponse extends PagenationParameters {
  // A list of roles for the specified query.
  roles: Role[];
}
