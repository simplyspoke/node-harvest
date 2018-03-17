import { PagenationParameters, PagenationResponse } from './base/pagenation';

/**
 * An response from the ExpenseCategories API
 */
export interface ExpenseCategory {
  // integer Unique ID for the expense category.
  id: number;

  // The name of the expense category.
  name: string;

  // The unit name of the expense category.
  unit_name: string;

  // The unit price of the expense category.
  // Type: decimal
  unit_price: number;

  // Whether the expense category is active or archived.
  is_active: boolean;

  // Date and time the expense category was created.
  created_at: string; // datetime

  // Date and time the expense category was last updated.
  updated_at: string; // datetime
}

/**
 * Response
 */
export interface ExpenseCategoriesPagenationResponse
  extends PagenationParameters {
  // A list of expense categories for the specified query.
  expenseCategorys: ExpenseCategory[];
}

/**
 * ExpenseCategories query parameters
 */
export interface ExpenseCategoriesPagenationParameters
  extends PagenationParameters {
  /**
   * Pass true to only return active expense categories and false to return inactive expense categories.
   */
  is_active: boolean;

  /**
   * Pass true to only return active expenseCategories and false to return inactive expenseCategories
   * Type: datetime.
   */
  updated_since: string;
}
