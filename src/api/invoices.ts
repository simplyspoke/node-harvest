import {
  InvoicesPagenationParameters,
  Invoice
} from '../models/invoices.models';

// Admin permissions required.
export class InvoicesAPI {
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
