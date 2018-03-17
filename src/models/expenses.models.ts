import { PagenationParameters, PagenationResponse } from './base/pagenation';

/**
 * An response from the Expenses API
 */
export interface Expense {
  // integer Unique ID for the expenses.
  id: number;

  // An object containing the expense’s client id, name, and currency.
  client: object;

  // An object containing the expense’s project id, name, and code.
  project: object;

  // An object containing the expense’s expense category id, name, unit_price, and unit_name.
  expense_category: object;

  // An object containing the id and name of the user that recorded the expense.
  user: object;

  // A user assignment object of the user that recorded the expense.
  user_assignment: object;

  // Once the expense has been invoiced, this field will include the associated invoice’s id and number.
  invoice: object;

  // An object containing the expense’s receipt URL and file name.
  receipt: object;

  // Any additional notes included on the expense.
  notes: string;

  // Whether the expense is billable or not.
  billable: boolean;

  // Whether the expense has been approved or closed for some other reason.
  is_closed: boolean;

  // Whether the expense has been been invoiced, approved, or the project or person related to the expense is archived.
  is_locked: boolean;

  // Whether or not the expense has been marked as invoiced.
  is_billed: boolean;

  // An explanation of why the expense has been locked.
  locked_reason: string;

  // Date the expense occurred.
  // Type: date
  spent_date: string;

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
export interface ExpensesPagenationResponse extends PagenationParameters {
  // A list of expenses for the specified query.
  expenses: Expense[];
}

/**
 * Expenses query parameters
 */
export interface ExpensesPagenationParameters extends PagenationParameters {
  /**
   * Only return expenses belonging to the user with the given ID.
   * Type: integer.
   */
  user_id: number;

  /**
   * Only return expenses belonging to the client with the given ID.
   * Type: integer.
   */
  client_id: number;

  /**
   * Only return expenses associated with the project with the given ID.
   * Type: integer.
   */
  project_id: number;

  /**
   * Pass true to only return expenses that have been invoiced and false to return expenses that have not been invoiced.
   */
  is_billed: boolean;

  /**
   * Pass true to only return active expenses and false to return inactive expenses
   * Type: datetime.
   */
  updated_since: string;

  /**
   * Only return expenses with an issue_date on or after the given date.
   * Type: date
   */
  from: string;

  /**
   * Only return expenses with an issue_date on or before the given date.
   * Type: date
   */
  to: string;
}
