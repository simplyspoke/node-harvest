import { PagenationParameters, PagenationResponse } from '../types/pagenation';

// Admin permissions required, except when retrieving the currently authenticated client.
export default class ClientsAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/clients';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: ClientsPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(client: Client) {
    return this.harvest.request('POST', this.baseUrl, client);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }
}

/**
 * An response from the Clients API
 */
export interface Client {
  // integer Unique ID for the client.
  id: number;

  // A textual description of the client.
  name: string;

  // Whether the client is active or archived.
  is_active: boolean;

  // The physical address for the client.
  address: string;

  // The currency code associated with this client.
  currency: string;

  // Date and time the client was created.
  created_at: string; // datetime

  // Date and time the client was last updated.
  updated_at: string; // datetime
}

/**
 * Response
 */
export interface ClientsPagenationResponse extends PagenationParameters {
  // A list of clients for the specified query.
  clients: Client[];
}

/**
 * Clients query parameters
 */
export interface ClientsPagenationParameters extends PagenationParameters {
  /**
   * Pass true to only return active clients and false to return inactive clients.
   */
  is_active: boolean;

  /**
   * Pass true to only return active clients and false to return inactive clients
   * Type: datetime.
   */
  updated_since: string;
}
