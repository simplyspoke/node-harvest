import { PagenationParameters, PagenationResponse } from './base/pagenation';

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
