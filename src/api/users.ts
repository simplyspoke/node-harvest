import { UsersPagenationParameters, User } from '../models/users.models';

// Admin permissions required, except when retrieving the currently authenticated user.
export default class UsersAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/users';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: UsersPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(user: User) {
    return this.harvest.request('POST', this.baseUrl, user);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }

  // Special: Get current signed in user
  public me() {
    return this.harvest.request('GET', `${this.baseUrl}/me`);
  }
}
