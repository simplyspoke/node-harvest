import { PagenationParameters, PagenationResponse } from './base/pagenation';

/**
 * An response from the EstimateItemCategories API
 */
export interface EstimateItemCategory {
  // integer Unique ID for the estimateItemCategory.
  id: number;

  // A textual description of the estimateItemCategory.
  name: string;

  // Date and time the estimateItemCategory was created.
  created_at: string; // datetime

  // Date and time the estimateItemCategory was last updated.
  updated_at: string; // datetime
}

/**
 * Response
 */
export interface EstimateItemCategoriesPagenationResponse
  extends PagenationParameters {
  // A list of estimateItemCategories for the specified query.
  estimateItemCategories: EstimateItemCategory[];
}

/**
 * EstimateItemCategories query parameters
 */
export interface EstimateItemCategoriesPagenationParameters
  extends PagenationParameters {
  /**
   * Pass true to only return active estimateItemCategories and false to return inactive estimateItemCategories
   * Type: datetime.
   */
  updated_since: string;
}
