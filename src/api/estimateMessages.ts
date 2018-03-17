import {
  EstimateMessagesPagenationParameters,
  EstimateMessage
} from '../models/estimateMessages.models';

// Admin permissions required.
export default class EstimateMessagesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/estimates';
    this.harvest = harvest;
  }

  public list(estimateId: number, query: EstimateMessagesPagenationParameters) {
    return this.harvest.request(
      'GET',
      `${this.baseUrl}/${estimateId}/messages`,
      query
    );
  }

  public create(estimateId: number, data: EstimateMessage) {
    return this.harvest.request(
      'POST',
      `${this.baseUrl}/${estimateId}/messages`,
      data
    );
  }

  public delete(estimateId: number, id) {
    return this.harvest.request(
      'DELETE',
      `${this.baseUrl}/${estimateId}/messages/${id}`
    );
  }
}
