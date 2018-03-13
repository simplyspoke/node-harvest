import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required.
export default class InvoicesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/invoices';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: InvoicesPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: Invoice) {
    return this.harvest.request('POST', this.baseUrl, data);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }

  // Creates a new invoice message object and marks an open invoice as a draft.
  // Returns an invoice message object and a 201 Created response code if the call succeeded.
  public draft(id) {
    return this.harvest.request('POST', `${this.baseUrl}/${id}/messages`, {
      event_type: 'draft'
    });
  }

  // Creates a new estimate message object and marks the estimate as sent.
  // Returns an estimate message object and a 201 Created response code if the call succeeded.
  public send(id) {
    return this.harvest.request('POST', `${this.baseUrl}/${id}/messages`, {
      event_type: 'send'
    });
  }

  // Creates a new invoice message object and marks the invoice as closed.
  // Returns an invoice message object and a 201 Created response code if the call succeeded.
  public close(id) {
    return this.harvest.request('POST', `${this.baseUrl}/${id}/messages`, {
      event_type: 'close'
    });
  }

  // Creates a new invoice message object and re-opens a closed invoice.
  // Returns an invoice message object and a 201 Created response code if the call succeeded.
  public reopen(id) {
    return this.harvest.request('POST', `${this.baseUrl}/${id}/messages`, {
      event_type: 're-open'
    });
  }
}

/**
 * An response from the Invoices API
 */
export interface Invoice {
  // integer Unique ID for the invoices.
  id: number;

  // An object containing the invoice’s client id, and name.
  client: object;

  // Array of invoice line items.
  line_items: InvoiceLineItem[];

  // An object containing the associated estimate’s id.
  estimate: object;

  // An object containing the associated retainer’s id.
  retainer: object;

  // An object containing the id and name of the person that created the invoice.
  creator: object;

  // Used to build a URL to the public web invoice for your client:
  // https://{ACCOUNT_SUBDOMAIN}.harvestapp.com/client/invoices/abc123456
  client_key: string;

  // If no value is set, the number will be automatically generated.
  number: string;

  // The purchase order number.
  purchase_order: string;

  // The total amount for the invoice, including any discounts and taxes.
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

  // The invoice subject.
  subject: string;

  // Any additional notes included on the invoice.
  notes: string;

  // The currency code associated with this invoice.
  currency: string;

  // The current state of the invoice: draft, sent, accepted, or declined.
  // TODO: Convert to a enum
  state: string;

  // Start of the period during which time entries and expenses were added to this invoice.
  // Type: date
  period_start: string;

  // End of the period during which time entries and expenses were added to this invoice.
  // Type: date
  period_end: string;

  // Date the invoice was issued.
  // Type: date
  issue_date: string;

  // Date the invoice is due.
  // Type: date
  due_date: string;

  // Date the invoice was issued.
  // Type: datetime
  sent_at: string;

  // Date and time the invoice was paid.
  // Type: datetime
  paid_at: string;

  // Date the invoice was paid.
  // Type: date
  paid_date: string;

  // Date and time the invoice was declined.
  // Type: datetime
  closed_at: string;

  // Date and time the invoice was created.
  // Type: datetime
  created_at: string;

  // Date and time the invoices was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * The invoice line item object
 */
export interface InvoiceLineItem {
  // integer Unique ID for the line item.
  id: number;

  // The name of an invoice item category.
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

  // Whether the invoice’s tax percentage applies to this line item.
  taxed: boolean;

  // Whether the invoice’s tax2 percentage applies to this line item.
  taxed2: boolean;
}

/**
 * Response
 */
export interface InvoicesPagenationResponse extends PagenationParameters {
  // A list of invoices for the specified query.
  invoices: Invoice[];
}

/**
 * Invoices query parameters
 */
export interface InvoicesPagenationParameters extends PagenationParameters {
  /**
   * Only return invoices belonging to the client with the given ID.
   * Type: integer.
   */
  client_id: number;

  /**
   * Only return invoices associated with the project with the given ID.
   * Type: integer.
   */
  project_id: number;

  /**
   * Pass true to only return active invoices and false to return inactive invoices
   * Type: datetime.
   */
  updated_since: string;

  /**
   * Only return invoices with an issue_date on or after the given date.
   * Type: date
   */
  from: string;

  /**
   * Only return invoices with an issue_date on or before the given date.
   * Type: date
   */
  to: boolean;
}
