import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required.
export default class ProjectsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/projects';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: ProjectsPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: Project) {
    return this.harvest.request('POST', this.baseUrl, data);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }
}

/**
 * An response from the Projects API
 */
export interface Project {
  // integer Unique ID for the projects.
  id: number;

  // An object containing the project’s client id, name, and currency.
  client: object;

  // The name of the project category.
  name: string;

  // The code associated with the project.
  code: string;

  // Whether the projects is active or archived.
  is_active: boolean;

  // Whether the project is billable or not.
  is_billable: boolean;

  // Whether the project is a fixed-fee project or not.
  is_fixed_fee: boolean;

  // The method by which the project is invoiced.
  // Type: decimal
  bill_by: string;

  // Rate for projects billed by Project Hourly Rate.
  // Type: decimal
  hourly_rate: number;

  // The budget in hours for the project when budgeting by time.
  // Type: decimal
  budget: number;

  // The method by which the project is budgeted.
  budget_by: string;

  // Whether project managers should be notified when the project goes over budget.
  notify_when_over_budget: boolean;

  // Percentage value used to trigger over budget email alerts.
  // Type: decimal
  over_budget_notification_percentage: number;

  // Date of last over budget notification. If none have been sent, this will be null.
  // Type: date
  over_budget_notification_date: string;

  // Option to show project budget to all employees. Does not apply to Total Project Fee projects.
  // Type: decimal
  show_budget_to_all: boolean;

  // The monetary budget for the project when budgeting by money.
  // Type: decimal
  cost_budget: number;

  // Option for budget of Total Project Fees projects to include tracked expenses.
  cost_budget_include_expenses: boolean;

  // The amount you plan to invoice for the project. Only used by fixed-fee projects.
  // Type: decimal
  fee: number;

  // Date and time the projects was created.
  notes: string;

  // Date and time the projects was created.
  // Type: date
  starts_on: string;

  // Date and time the projects was created.
  // Type: date
  ends_on: string;

  // Date and time the projects was created.
  // Type: datetime
  created_at: string;

  // Date and time the projects was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * Response
 */
export interface ProjectsPagenationResponse extends PagenationParameters {
  // A list of projects for the specified query.
  projects: Project[];
}

/**
 * Projects query parameters
 */
export interface ProjectsPagenationParameters extends PagenationParameters {
  /**
   * Pass true to only return active projects and false to return inactive projects.
   */
  is_active: boolean;

  /**
   * Only return projects belonging to the client with the given ID.
   * Type: integer.
   */
  client_id: string;

  /**
   * Pass true to only return active projects and false to return inactive projects
   * Type: datetime.
   */
  updated_since: string;
}
