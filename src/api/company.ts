import { Company } from '../models/company.models';

export class CompanyAPI {
  harvest;

  constructor(harvest) {
    this.harvest = harvest;
  }

  public get() {
    return this.harvest.request('GET', '/v2/company');
  }
}
