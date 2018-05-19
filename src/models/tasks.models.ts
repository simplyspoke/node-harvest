import { PagenationParameters, PagenationResponse } from './base/pagenation';

/**
 * An response from the Tasks API
 */
export interface Task {
  // integer Unique ID for the task.
  id: number;

  // The name of the task.
  name: string;

  // Used in determining whether default tasks should be marked billable when creating a new project.
  billable_by_default: boolean;

  // The hourly rate to use for this task when it is added to a project.
  // Type: decimal
  default_hourly_rate: number;

  // Whether this task should be automatically added to future projects.
  is_default: boolean;

  // Whether the tasks is active or archived.
  is_active: boolean;

  // Date and time the tasks was created.
  // Type: datetime
  created_at: string;

  // Date and time the tasks was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * Response
 */
export interface TasksPagenationResponse extends PagenationParameters {
  // A list of tasks for the specified query.
  tasks: Task[];
}

/**
 * Tasks query parameters
 */
export interface TasksPagenationParameters extends PagenationParameters {
  /**
   * Pass true to only return active tasks and false to return inactive tasks.
   */
  is_active?: boolean;

  /**
   * Pass true to only return active tasks and false to return inactive tasks
   * Type: datetime.
   */
  updated_since?: string;
}
