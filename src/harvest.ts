import Client from './client';
import ClientsAPI from './api/clients';
import ContactsAPI from './api/contacts';
import CompanyAPI from './api/company';
import EstimatesAPI from './api/estimates';
import EstimateItemCategoriesAPI from './api/estimateItemCategories';
import EstimateMessagesAPI from './api/estimateMessages';
import ExpensesAPI from './api/expenses';
import ExpenseCategoriesAPI from './api/expenseCategories';
import InvoicesAPI from './api/invoices';
import InvoiceItemCategoriesAPI from './api/invoiceItemCategories';
import InvoiceMessagesAPI from './api/invoiceMessages';
import ProjectsAPI from './api/projects';
import ProjectAssignmentsAPI from './api/projectAssignments';
import RolesAPI from './api/roles';
import TasksAPI from './api/tasks';
import TaskAssignmentsAPI from './api/taskAssignments';
import UsersAPI from './api/users';
import UserAssignmentsAPI from './api/userAssignments';

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
  estimateMessages;
  expenses;
  expenseCategories;
  invoices;
  invoiceItemCategories;
  invoiceMessages;
  projects;
  projectAssignments;
  roles;
  tasks;
  taskAssignments;
  users;
  userAssignments;

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
    this.estimateMessages = new EstimateMessagesAPI(this);
    this.expenses = new ExpensesAPI(this);
    this.expenseCategories = new ExpenseCategoriesAPI(this);
    this.invoices = new InvoicesAPI(this);
    this.invoiceItemCategories = new InvoiceItemCategoriesAPI(this);
    this.invoiceMessages = new InvoiceMessagesAPI(this);
    this.projects = new ProjectsAPI(this);
    this.projectAssignments = new ProjectAssignmentsAPI(this);
    this.roles = new RolesAPI(this);
    this.tasks = new TasksAPI(this);
    this.taskAssignments = new TaskAssignmentsAPI(this);
    this.users = new UsersAPI(this);
    this.userAssignments = new UserAssignmentsAPI(this);
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
