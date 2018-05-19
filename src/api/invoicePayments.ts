import {
  InvoicePaymentsPagenationParameters,
  InvoicePayment
} from '../models/invoicePayments.models';

// Admin permissions required.
export class InvoicePaymentsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/invoices';
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
