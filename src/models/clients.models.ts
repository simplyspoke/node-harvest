import { PagenationParameters, PagenationResponse } from './base/pagenation';

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
  is_active?: boolean;

  /**
   * Pass true to only return active clients and false to return inactive clients
   * Type: datetime.
   */
  updated_since?: string;
}
