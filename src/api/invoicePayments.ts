import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required.
export default class InvoicePaymentsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/invoice';
    this.harvest = harvest;
  }

  public list(invoiceId: number, query: InvoicePaymentsPagenationParameters) {
    return this.harvest.request(
      'GET',
      `${this.baseUrl}/${invoiceId}/payments`,
      query
    );
  }

  public create(invoiceId: number, data: InvoicePayment) {
    return this.harvest.request(
      'POST',
      `${this.baseUrl}/${invoiceId}/payments`,
      data
    );
  }

  public delete(invoiceId: number, id: number) {
    return this.harvest.request(
      'DELETE',
      `${this.baseUrl}/${invoiceId}/payments/${id}`
    );
  }
}

/**
 * An response from the InvoicePayments API
 */
export interface InvoicePayment {
  // Unique ID for the payment.
  id: number;

  // The amount of the payment.
  // Type: decimal
  amount: number;

  // Date and time the payment was made.
  // Type: datetime
  paid_at: string;

  // Date the payment was made.
  // Type: date
  paid_date: string;

  // The name of the person who recorded the payment.
  recorded_by: string;

  // The email of the person who recorded the payment.
  recorded_by_email: string;

  // Any notes associated with the payment.
  notes: string;

  // Either the card authorization or PayPal transaction ID.
  transaction_id: string;

  // The payment gateway id and name used to process the payment.
  payment_gateway: object;

  // Date and time the payment was created.
  // Type: datetime
  created_at: string;

  // Date and time the payment was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * Response
 */
export interface InvoicePaymentsPagenationResponse
  extends PagenationParameters {
  // A list of invoicePayments for the specified query.
  invoicePayments: InvoicePayment[];
}

/**
 * InvoicePayments query parameters
 */
export interface InvoicePaymentsPagenationParameters
  extends PagenationParameters {
  /**
   * Pass true to only return active invoicePayments and false to return inactive invoicePayments
   * Type: datetime.
   */
  updated_since: string;
}
