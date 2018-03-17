import { PagenationParameters, PagenationResponse } from './base/pagenation';

/**
 * An response from the Estimates API
 */
export interface Estimate {
  // integer Unique ID for the estimates.
  id: number;

  // An object containing the estimate’s client id, and name.
  client: object;

  // Array of estimate line items.
  line_items: EstimateLineItem[];

  // An object containing the id and name of the person that created the estimate.
  creator: object;

  // Used to build a URL to the public web invoice for your client:
  // https://{ACCOUNT_SUBDOMAIN}.harvestapp.com/client/invoices/abc123456
  client_key: string;

  // If no value is set, the number will be automatically generated.
  number: string;

  // The purchase order number.
  purchase_order: string;

  // The total amount for the estimate, including any discounts and taxes.
  // Type: decimal
  amount: number;

  // 	This percentage is applied to the subtotal, including line items and discounts.
  // Type: decimal
  tax: number;

  // The first amount of tax included, calculated from tax. If no tax is defined, this value will be null.
  // Type: decimal
  tax_amount: number;

  // This percentage is applied to the subtotal, including line items and discounts.
  // Type: decimal
  tax2: number;

  // The amount calculated from tax2.
  // Type: decimal
  tax2_amount: number;

  // This percentage is subtracted from the subtotal.
  // Type: decimal
  discount: number;

  // The amount calcuated from discount.
  // Type: decimal
  discount_amount: number;

  // The estimate subject.
  subject: string;

  // Any additional notes included on the estimate.
  notes: string;

  // The currency code associated with this estimate.
  currency: string;

  // The current state of the estimate: draft, sent, accepted, or declined.
  // TODO: Convert to a enum
  state: string;

  // Date and time the estimate was created.
  // Type: date
  issue_date: string;

  // Date the estimate was issued.
  // Type: datetime
  sent_at: string;

  // Date and time the estimate was accepted.
  // Type: datetime
  accepted_at: string;

  // Date and time the estimate was declined.
  // Type: datetime
  declined_at: string;

  // Date and time the estimate was created.
  // Type: datetime
  created_at: string;

  // Date and time the estimates was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * The estimate line item object
 */
export interface EstimateLineItem {
  // integer Unique ID for the line item.
  id: number;

  // The name of an estimate item category.
  kind: string;

  // Text description of the line item.
  description: string;

  // The unit quantity of the item.
  // Type: integer
  quantity: number;

  // The individual price per unit.
  // Type: decimal
  unit_price: number;

  // The line item subtotal (quantity * unit_price).
  // Type: decimal
  amount: number;

  // Whether the estimate’s tax percentage applies to this line item.
  taxed: boolean;

  // Whether the estimate’s tax2 percentage applies to this line item.
  taxed2: boolean;
}

/**
 * Response
 */
export interface EstimatesPagenationResponse extends PagenationParameters {
  // A list of estimates for the specified query.
  estimates: Estimate[];
}

/**
 * Estimates query parameters
 */
export interface EstimatesPagenationParameters extends PagenationParameters {
  /**
   * Only return estimates belonging to the client with the given ID.
   * Type: integer.
   */
  client_id: number;

  /**
   * Pass true to only return active estimates and false to return inactive estimates
   * Type: datetime.
   */
  updated_since: string;

  /**
   * Only return estimates with an issue_date on or after the given date.
   * Type: date
   */
  from: string;

  /**
   * Only return estimates with an issue_date on or before the given date.
   * Type: date
   */
  to: string;
}
