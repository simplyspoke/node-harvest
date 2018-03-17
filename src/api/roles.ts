import { PagenationParameters } from '../models/base/pagenation';
import { Role } from '../models/roles.models';

// Admin permissions and Team feature required.
export default class RolesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/roles';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: PagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(role: Role) {
    return this.harvest.request('POST', this.baseUrl, role);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }
}
