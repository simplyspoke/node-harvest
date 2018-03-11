import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required.
export default class InvoiceMessagesAPI {
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

/**
 * An response from the InvoiceMessages API
 */
export interface InvoiceMessage {
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

  // Array of invoice message recipients.
  recipients: InvoiceMessageRecipient[];

  // The message subject.
  subject: string;

  // The message body.
  body: string;

  // Whether to include a link to the client invoice in the message body. Not used when thank_you is true.
  include_link_to_client_invoice: boolean;

  // Whether to attach the invoice PDF to the message email.
  attach_pdf: boolean;

  // Whether to email a copy of the message to the current user.
  send_me_a_copy: boolean;

  // Whether this is a thank you message.
  thank_you: boolean;

  // The type of invoice event that occurred with the message: send, accept, decline, re-open, view, or invoice.
  // TODO: Convert to a enum
  event_type: string;

  // Whether this is a reminder message.
  reminder: boolean;

  // The date the reminder email will be sent.
  // Type: date
  send_reminder_on: string;

  // Date and time the message was created.
  // Type: datetime
  created_at: string;

  // Date and time the message was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * The invoice message recipient object
 */
export interface InvoiceMessageRecipient {
  // Name of the message recipient.
  name: string;

  // Email of the message recipient.
  email: string;
}

/**
 * Response
 */
export interface InvoiceMessagesPagenationResponse
  extends PagenationParameters {
  // A list of invoiceMessages for the specified query.
  invoiceMessages: InvoiceMessage[];
}

/**
 * InvoiceMessages query parameters
 */
export interface InvoiceMessagesPagenationParameters
  extends PagenationParameters {
  /**
   * Pass true to only return active invoiceMessages and false to return inactive invoiceMessages
   * Type: datetime.
   */
  updated_since: string;
}
