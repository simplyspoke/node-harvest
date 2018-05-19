import {
  ExpensesPagenationParameters,
  Expense
} from '../models/expenses.models';

// Admin permissions required.
export class ExpensesAPI {
  harvest;
  baseUrl: string;

  constructor(harvest) {
    this.baseUrl = '/v2/expenses';
    this.harvest = harvest;
  }

  public get(id) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: ExpensesPagenationParameters) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(data: Expense) {
    return this.harvest.request('POST', this.baseUrl, data);
  }

  public update(id, data) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }
}
