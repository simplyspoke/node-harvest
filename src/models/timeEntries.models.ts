import { PagenationParameters, PagenationResponse } from './base/pagenation';

/**
 * An response from the TimeEntries API
 */
export interface TimeEntry {
  // Unique ID for the time entry.
  // Type: integer
  id: number;

  // Date of the time entry.
  // Type: date
  spent_date: string;

  // An object containing the id and name of the associated user.
  user: object;

  // A user assignment object of the associated user.
  user_assignment: object;

  // An object containing the id and name of the associated client.
  client: object;

  // An object containing the id and name of the associated project.
  project: object;

  // An object containing the id and name of the associated task.
  task: object;

  // A task assignment object of the associated task.
  task_assignment: object;

  // An object containing the id, group_id, permalink, service, and service_icon_url of the associated external reference.
  external_reference: object;

  // Once the time entry has been invoiced, this field will include the associated invoice’s id and number.
  invoice: object;

  // Number of (decimal time) hours tracked in this time entry.
  // Type: decimal
  hours: number;

  // Notes attached to the time entry.
  notes: string;

  // Whether or not the time entry has been locked.
  is_locked: boolean;

  // Why the time entry has been locked.
  locked_reason: string;

  // Whether the expense has been approved or closed for some other reason.
  is_closed: boolean;

  // Whether or not the time entry is billable.
  billable: boolean;

  // Whether or not the time entry has been marked as invoiced.
  is_billed: boolean;

  // Date and time the timer was started (if tracking by duration).
  // Type: datetime
  timer_started_at: string;

  // Time the time entry was started (if tracking by start/end times).
  // Type: time
  started_time: string;

  // Time the time entry was ended (if tracking by start/end times).
  // Type: time
  ended_time: string;

  // Whether or not the time entry is billable.
  is_running: boolean;

  // Whether or not the time entry is billable.
  budgeted: boolean;

  // The billable rate for the time entry.
  // Type: decimal
  billable_rate: number;

  // The cost rate for the time entry.
  // Type: decimal
  cost_rate: number;

  // Date and time the expense was created.
  // Type: datetime
  created_at: string;

  // Date and time the expenses was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * Response
 */
export interface TimeEntriesPagenationResponse extends PagenationParameters {
  // A list of time entries for the specified query.
  expenses: TimeEntry[];
}

/**
 * TimeEntries query parameters
 */
export interface TimeEntriesPagenationParameters extends PagenationParameters {
  /**
   * Only return time entries belonging to the user with the given ID.
   * Type: integer.
   */
  user_id?: number;

  /**
   * Only return time entries belonging to the client with the given ID.
   * Type: integer.
   */
  client_id?: number;

  /**
   * Only return time entries belonging to the project with the given ID.
   * Type: integer.
   */
  project_id?: number;

  /**
   * Pass true to only return time entries that have been invoiced and false to return time entries that have not been invoiced.
   */
  is_billed?: boolean;

  /**
   * Pass true to only return running time entries and false to return non-running time entries.
   */
  is_running?: boolean;

  /**
   * Only return time entries that have been updated since the given date and time.
   * Type: datetime.
   */
  updated_since?: string;

  /**
   * Only return time entries with a spent_date on or after the given date.
   * Type: date
   */
  from?: string;

  /**
   * Only return time entries with a spent_date on or before the given date.
   * Type: date
   */
  to?: string;
}

/**
 * Create a Time Entry from a duration
 */
export interface TimeEntryCreateFromDuration {
  /**
   * The ID of the project to associate with the time entry.
   * Type: integer 
   */
  project_id: number;
  
  /**
   * The ID of the task to associate with the time entry.
   * Type: integer 
   */
  task_id: number;
  
  /**
   * The ISO 8601 formatted date the time entry was spent.
   * Type: date 
   */
  spent_date: string;
  
  /**
   * The ID of the user to associate with the time entry. Defaults to the currently authenticated user’s ID.
   * Type: integer 
   */
  user_id?: number;
  
  /**
   * The current amount of time tracked. If provided, `is_running` on the time entry will be true.
   * Type: decimal 
   */
  hours?: number;
  
  /**
   * Any notes to be associated with the time entry.
   * Type: string 
   */
  notes?: string;
  
  /**
   * An object containing the `id`, `group_id`, and `permalink` of the external reference.
   * Type: object 
   */
  external_reference?: any;
}

/**
 * Create a Time Entry from a start and end time
 */
export interface TimeEntryCreateFromStartAndEndTime {
  /**
   * The ID of the project to associate with the time entry.
   * Type: integer 
   */
  project_id: number;
  
  /**
   * The ID of the task to associate with the time entry.
   * Type: integer 
   */
  task_id: number;
  
  /**
   * The ISO 8601 formatted date the time entry was spent.
   * Type: date 
   */
  spent_date: string;
  
  /**
   * The ID of the user to associate with the time entry. Defaults to the currently authenticated user’s ID.
   * Type: integer 
   */
  user_id?: number;
  
  /**
   * The time the entry started. Defaults to the current time. Example: "8:00am".
   * Type: time 
   */
  started_time?: string;
  
  /**
   * The time the entry ended. If provided, `is_running` on the time entry will be false.
   * Type: time 
   */
  ended_time?: string;

  /**
   * Any notes to be associated with the time entry.
   * Type: string 
   */
  notes?: string;
  
  /**
   * An object containing the `id`, `group_id`, and `permalink` of the external reference.
   * Type: object 
   */
  external_reference?: any;
}
