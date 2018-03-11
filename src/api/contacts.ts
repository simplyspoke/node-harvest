import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required, except when retrieving the currently authenticated contact.
export default class ContactsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/contacts';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: ContactsPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(contact: Contact) {
    return this.harvest.request('POST', this.baseUrl, contact);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }

  // Special: Get current signed in contact
  public me() {
    return this.harvest.request('GET', `${this.baseUrl}/me`);
  }
}

/**
 * An response from the Contacts API
 */
export interface Contact {
  // integer Unique ID for the contact.
  id: number;

  // An object containing the contact’s client id and name.
  client: object;

  // The title of the contact.
  title: string;

  // The first name of the contact.
  first_name: string;

  // The last name of the contact.
  last_name: string;

  // The email address of the contact.
  email: string;

  // The contact’s office phone number.
  phone_office: string;

  // The contact’s mobile phone number.
  phone_mobile: string;

  // 	The contact’s fax number.
  fax: string;

  // datetime: Date and time the contact was created.
  // Type: datetime
  created_at: string;

  // : Date and time the contact was last updated.
  // Type: datetime
  updated_at: string;
}

/**
 * Response
 */
export interface ContactsPagenationResponse extends PagenationParameters {
  // A list of contacts for the specified query.
  contacts: Contact[];
}

/**
 * Contacts query parameters
 */
export interface ContactsPagenationParameters extends PagenationParameters {
  /**
   * Only return contacts belonging to the client with the given ID.
   */
  client_id: boolean;

  /**
   * Pass true to only return active contacts and false to return inactive contacts
   * Type: datetime.
   */
  updated_since: string;
}
