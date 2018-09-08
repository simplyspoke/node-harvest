import Harvest from '../index';
import { Company } from '../models/company.models';

export class CompanyAPI {
  private harvest: Harvest;

  constructor(harvest: Harvest) {
    this.harvest = harvest;
  }

  public get() {
    return this.harvest.request<Company>('GET', '/v2/company');
  }
}
