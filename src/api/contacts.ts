import {
  ContactsPagenationParameters,
  Contact
} from '../models/contacts.models';

// Admin permissions required, except when retrieving the currently authenticated contact.
export class ContactsAPI {
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
}
