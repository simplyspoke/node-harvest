import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required.
export default class ExpensesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/expenses';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: ExpensesPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: Expense) {
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
 * An response from the Expenses API
 */
export interface Expense {
  // integer Unique ID for the expenses.
  id: number;

  // The name of the expense category.
  name: string;

  // The unit name of the expense category.
  unit_name: string;

  // The unit price of the expense category.
  // Type: decimal
  unit_price: number;

  // Whether the expenses is active or archived.
  is_active: boolean;

  // Date and time the expenses was created.
  created_at: string; // datetime

  // Date and time the expenses was last updated.
  updated_at: string; // datetime
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
   * Pass true to only return active expenses and false to return inactive expenses.
   */
  is_active: boolean;

  /**
   * Pass true to only return active expenses and false to return inactive expenses
   * Type: datetime.
   */
  updated_since: string;
}
