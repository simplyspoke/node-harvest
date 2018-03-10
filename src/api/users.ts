import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required, except when retrieving the currently authenticated user.
export default class UsersAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/users';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: UsersPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(user: User) {
    return this.harvest.request('POST', this.baseUrl, user);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }

  // Special: Get current signed in user
  public me() {
    return this.harvest.request('GET', `${this.baseUrl}/me`);
  }
}

/**
 * An response from the Users API
 */
export interface User {
  // integer Unique ID for the user.
  id: number;

  // The first name of the user.
  first_name: string;

  // The last name of the user.
  last_name: string;

  // The email address of the user.
  email: string;

  // The telephone number for the user.
  telephone: string;

  // The user’s timezone.
  timezone: string;

  // Whether the user should be automatically added to future projects.
  has_access_to_all_future_projects: boolean;

  // Whether the user is a contractor or an employee.
  is_contractor: boolean;

  // Whether the user has admin permissions.
  is_admin: boolean;

  // Whether the user has project manager permissions.
  is_project_manager: boolean;

  // Whether the user can see billable rates on projects. Only applicable to project managers.
  can_see_rates: boolean;

  // Whether the user can create projects. Only applicable to project managers.
  can_create_projects: boolean;

  // Whether the user can create invoices. Only applicable to project managers.
  can_create_invoices: boolean;

  // Whether the user is active or archived.
  is_active: boolean;

  // The number of hours per week this person is available to work in seconds. For example, if a person’s capacity is 35 hours, the API will return 126000 seconds.
  weekly_capacity: number; // integer

  // The billable rate to use for this user when they are added to a project.
  default_hourly_rate: number; // decimal

  // decimal: The cost rate to use for this user when calculating a project’s costs vs billable amount.
  cost_rate: number; // decimal

  // array of strings: The role names assigned to this person.
  roles: string[];

  // The URL to the user’s avatar image.
  avatar_url: string;

  // datetime: Date and time the user was created.
  created_at: string; // datetime

  // : Date and time the user was last updated.
  updated_at: string; // datetime
}

/**
 * Response
 */
export interface UsersPagenationResponse extends PagenationParameters {
  // A list of users for the specified query.
  users: User[];
}

/**
 * Users query parameters
 */
export interface UsersPagenationParameters extends PagenationParameters {
  /**
   * Pass true to only return active users and false to return inactive users.
   */
  is_active: boolean;

  /**
   * Pass true to only return active users and false to return inactive users
   * Type: datetime.
   */
  updated_since: string;
}
