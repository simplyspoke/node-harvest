import { PagenationParameters, PagenationResponse } from '../types/pagenation';

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

/**
 * An response from the EstimateMessages API
 */
export interface EstimateMessage {
  // integer Unique ID for the message.
  id: number;

  // Name of the user that created the message.
  sent_by: string;

  // Email of the user that created the message.
  sent_by_email: string;

  // Name of the user that the message was sent from.
  sent_from: string;

  // Email of the user that message was sent from.
  sent_from_email: string;

  // Array of estimate message recipients.
  recipients: EstimateMessageRecipient[];

  // The message subject.
  subject: string;

  // The message body.
  body: string;

  // Whether to email a copy of the message to the current user.
  send_me_a_copy: boolean;

  // The type of estimate event that occurred with the message: send, accept, decline, re-open, view, or invoice.
  // TODO: Convert to a enum
  event_type: string;

  // Date and time the message was created.
  // Type: datetime
  created_at: string;

  // Date and time the message was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * The estimate message recipient object
 */
export interface EstimateMessageRecipient {
  // Name of the message recipient.
  name: string;

  // Email of the message recipient.
  email: string;
}

/**
 * Response
 */
export interface EstimateMessagesPagenationResponse
  extends PagenationParameters {
  // A list of estimateMessages for the specified query.
  estimateMessages: EstimateMessage[];
}

/**
 * EstimateMessages query parameters
 */
export interface EstimateMessagesPagenationParameters
  extends PagenationParameters {
  /**
   * Pass true to only return active estimateMessages and false to return inactive estimateMessages
   * Type: datetime.
   */
  updated_since: string;
}
