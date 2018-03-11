import Client from './client';
import ClientsAPI from './api/clients';
import ContactsAPI from './api/contacts';
import CompanyAPI from './api/company';
import EstimatesAPI from './api/estimates';
import EstimateItemCategoriesAPI from './api/estimateItemCategories';
import ExpensesAPI from './api/expenses';
import InvoiceItemCategoriesAPI from './api/invoiceItemCategories';
import ProjectsAPI from './api/projects';
import RolesAPI from './api/roles';
import UsersAPI from './api/users';

/**
 * Provides the starting point of the harvest module
 */
export default class Harvest {
  host: string;
  userAgent = null;
  concurrency = null;
  debug = false;

  client: Client;
  request;

  clients;
  company;
  contacts;
  estimates;
  estimateItemCategories;
  expenses;
  invoiceItemCategories;
  projects;
  roles;
  users;

  constructor(config) {
    this.host = 'https://' + config.subdomain + '.harvestapp.com';
    this.userAgent = config.userAgent;
    this.concurrency = config.concurrency || null;
    this.debug = config.debug || false;

    this.client = new Client(config);
    this.request = this.requestGenerator();

    this.clients = new ClientsAPI(this);
    this.company = new CompanyAPI(this);
    this.contacts = new ContactsAPI(this);
    this.estimates = new EstimatesAPI(this);
    this.estimateItemCategories = new EstimateItemCategoriesAPI(this);
    this.expenses = new ExpensesAPI(this);
    this.invoiceItemCategories = new InvoiceItemCategoriesAPI(this);
    this.projects = new ProjectsAPI(this);
    this.roles = new RolesAPI(this);
    this.users = new UsersAPI(this);
  }

  requestGenerator() {
    return function(method: string, uri: string, data: any = {}) {
      return new Promise((resolve, reject) => {
        this.client.push({
          method,
          uri,
          data,
          callback: (error, results) => {
            if (error) {
              reject(error);
            }

            resolve(results);
          }
        });
      });
    };
  }
}
