import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions and Team feature required.
export default class RolesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/roles';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: PagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(role: Role) {
    return this.harvest.request('POST', this.baseUrl, role);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }
}

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
