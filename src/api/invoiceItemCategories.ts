import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required, except when retrieving the currently authenticated invoiceItemCategorie.
export default class InvoiceItemCategoriesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/invoiceItemCategories';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: InvoiceItemCategoriesPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: InvoiceItemCategory) {
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
 * An response from the InvoiceItemCategories API
 */
export interface InvoiceItemCategory {
  // integer Unique ID for the invoiceItemCategorie.
  id: number;

  // A textual description of the invoiceItemCategorie.
  name: string;

  // Whether this invoice item category is used for billable hours when generating an invoice.
  use_as_service: boolean;

  // Whether this invoice item category is used for expenses when generating an invoice.
  use_as_expense: boolean;

  // Date and time the invoiceItemCategorie was created.
  created_at: string; // datetime

  // Date and time the invoiceItemCategorie was last updated.
  updated_at: string; // datetime
}

/**
 * Response
 */
export interface InvoiceItemCategoriesPagenationResponse
  extends PagenationParameters {
  // A list of invoiceItemCategories for the specified query.
  invoiceItemCategories: InvoiceItemCategory[];
}

/**
 * InvoiceItemCategories query parameters
 */
export interface InvoiceItemCategoriesPagenationParameters
  extends PagenationParameters {
  /**
   * Pass true to only return active invoiceItemCategories and false to return inactive invoiceItemCategories
   * Type: datetime.
   */
  updated_since: string;
}
