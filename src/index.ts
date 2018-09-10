import { RequestClient } from './client';
import { ClientsAPI } from './api/clients';
import { CompanyAPI } from './api/company';
import { ContactsAPI } from './api/contacts';
import { EstimateItemCategoriesAPI } from './api/estimateItemCategories';
import { EstimateMessagesAPI } from './api/estimateMessages';
import { EstimatesAPI } from './api/estimates';
import { ExpenseCategoriesAPI } from './api/expenseCategories';
import { ExpensesAPI } from './api/expenses';
import { InvoiceItemCategoriesAPI } from './api/invoiceItemCategories';
import { InvoiceMessagesAPI } from './api/invoiceMessages';
import { InvoicePaymentsAPI } from './api/invoicePayments';
import { InvoicesAPI } from './api/invoices';
import { ProjectAssignmentsAPI } from './api/projectAssignments';
import { ProjectsAPI } from './api/projects';
import { RolesAPI } from './api/roles';
import { TaskAssignmentsAPI } from './api/taskAssignments';
import { TasksAPI } from './api/tasks';
import { TimeEntriesAPI } from './api/timeEntries';
import { UserAssignmentsAPI } from './api/userAssignments';
import { UsersAPI } from './api/users';

export interface Config {
  subdomain: string;
  userAgent: string;
  concurrency?: number;
  debug?: boolean;
  auth: {
    accessToken: string;
    accountId: number;
  };
}

/**
 * Provides the starting point of the harvest module
 */
export default class Harvest {
  host: string;
  userAgent: string = null;
  concurrency: number = null;
  debug: boolean = false;

  client: RequestClient;
  request: <T>(method: string, uri: string, data?: any) => Promise<T>;

  clients: ClientsAPI;
  company: CompanyAPI;
  contacts: ContactsAPI;
  estimateItemCategories: EstimateItemCategoriesAPI;
  estimateMessages: EstimateMessagesAPI;
  estimates: EstimatesAPI;
  expenseCategories: ExpenseCategoriesAPI;
  expenses: ExpensesAPI;
  invoiceItemCategories: InvoiceItemCategoriesAPI;
  invoiceMessages: InvoiceMessagesAPI;
  invoicePayments: InvoicePaymentsAPI;
  invoices: InvoicesAPI;
  projectAssignments: ProjectAssignmentsAPI;
  projects: ProjectsAPI;
  roles: RolesAPI;
  taskAssignments: TaskAssignmentsAPI;
  tasks: TasksAPI;
  timeEntries: TimeEntriesAPI;
  userAssignments: UserAssignmentsAPI;
  users: UsersAPI;

  constructor(config: Config) {
    this.host = 'https://' + config.subdomain + '.harvestapp.com';
    this.userAgent = config.userAgent;
    this.concurrency = config.concurrency || null;
    this.debug = config.debug || false;

    this.client = new RequestClient(config);
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
    this.invoicePayments = new InvoicePaymentsAPI(this);
    this.projects = new ProjectsAPI(this);
    this.projectAssignments = new ProjectAssignmentsAPI(this);
    this.roles = new RolesAPI(this);
    this.tasks = new TasksAPI(this);
    this.taskAssignments = new TaskAssignmentsAPI(this);
    this.timeEntries = new TimeEntriesAPI(this);
    this.users = new UsersAPI(this);
    this.userAssignments = new UserAssignmentsAPI(this);
  }

  requestGenerator<T>() {
    return (method: string, uri: string, data: any = {}) => {
      return new Promise<T>((resolve, reject) => {
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
