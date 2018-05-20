import {
  InvoiceMessagesPagenationParameters,
  InvoiceMessage
} from '../models/invoiceMessages.models';

// Admin permissions required.
export class InvoiceMessagesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/invoices';
    this.harvest = harvest;
  }

  public list(invoiceId: number, query: InvoiceMessagesPagenationParameters) {
    return this.harvest.request(
      'GET',
      `${this.baseUrl}/${invoiceId}/messages`,
      query
    );
  }

  public create(invoiceId: number, data: InvoiceMessage) {
    return this.harvest.request(
      'POST',
      `${this.baseUrl}/${invoiceId}/messages`,
      data
    );
  }

  public delete(invoiceId: number, id) {
    return this.harvest.request(
      'DELETE',
      `${this.baseUrl}/${invoiceId}/messages/${id}`
    );
  }
}
