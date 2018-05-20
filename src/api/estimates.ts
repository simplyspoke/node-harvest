import {
  EstimatesPagenationParameters,
  Estimate
} from '../models/estimates.models';

// Admin permissions required.
export class EstimatesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/estimates';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: EstimatesPagenationParameters = {}) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: Estimate) {
    return this.harvest.request('POST', this.baseUrl, data);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }

  // Creates a new estimate message object and marks the estimate as sent.
  // Returns an estimate message object and a 201 Created response code if the call succeeded.
  public send(id) {
    return this.harvest.request('POST', `${this.baseUrl}/${id}/messages`, {
      event_type: 'send'
    });
  }

  // Creates a new estimate message object and marks the estimate as accepted.
  // Returns an estimate message object and a 201 Created response code if the call succeeded.
  public accept(id) {
    return this.harvest.request('POST', `${this.baseUrl}/${id}/messages`, {
      event_type: 'accept'
    });
  }

  // Creates a new estimate message object and marks the estimate as declined.
  // Returns an estimate message object and a 201 Created response code if the call succeeded.
  public decline(id) {
    return this.harvest.request('POST', `${this.baseUrl}/${id}/messages`, {
      event_type: 'decline'
    });
  }

  // Creates a new estimate message object and re-opens a closed estimate.
  // Returns an estimate message object and a 201 Created response code if the call succeeded.
  public reopen(id) {
    return this.harvest.request('POST', `${this.baseUrl}/${id}/messages`, {
      event_type: 're-open'
    });
  }
}
