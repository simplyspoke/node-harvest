import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required, except when retrieving the currently authenticated estimateItemCategory.
export default class EstimateItemCategoriesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/estimate_item_categories';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: EstimateItemCategoriesPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: EstimateItemCategory) {
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
