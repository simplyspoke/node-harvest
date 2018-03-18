import { Client } from '../src/models/clients.models';
import { Company } from '../src/models/company.models';
import { Contact } from '../src/models/contacts.models';
import { EstimateItemCategory } from '../src/models/estimateItemCategories.models';
import { EstimateMessage } from '../src/models/estimateMessages.models';
import { Estimate } from '../src/models/estimates.models';
import { ExpenseCategory } from '../src/models/expenseCategories.models';
import { Expense } from '../src/models/expenses.models';
import { InvoiceItemCategory } from '../src/models/invoiceItemCategories.models';
import { InvoiceMessage } from '../src/models/invoiceMessages.models';
import { InvoicePayment } from '../src/models/invoicePayments.models';
import { Invoice } from '../src/models/invoices.models';
import { ProjectAssignment } from '../src/models/projectAssignments.models';
import { Project } from '../src/models/projects.models';
import { Role } from '../src/models/roles.models';
import { TaskAssignment } from '../src/models/taskAssignments.models';
import { Task } from '../src/models/tasks.models';
import { TimeEntry } from '../src/models/timeEntries.models';
import { UserAssignment } from '../src/models/userAssignments.models';
import { User } from '../src/models/users.models';

export const contacts: Contact[] = [
  {
    id: 4706479,
    title: 'Owner',
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'janedoe@example.com',
    phone_office: '(203) 697-8885',
    phone_mobile: '(203) 697-8886',
    fax: '(203) 697-8887',
    created_at: '2017-06-26T21:20:07Z',
    updated_at: '2017-06-26T21:27:07Z',
    client: {
      id: 5735774,
      name: 'ABC Corp'
    }
  },
  {
    id: 4706453,
    title: 'Manager',
    first_name: 'Richard',
    last_name: 'Roe',
    email: 'richardroe@example.com',
    phone_office: '(318) 515-5905',
    phone_mobile: '(318) 515-5906',
    fax: '(318) 515-5907',
    created_at: '2017-06-26T21:06:55Z',
    updated_at: '2017-06-26T21:27:20Z',
    client: {
      id: 5735776,
      name: '123 Industries'
    }
  }
];

export const clients: Client[] = [
  {
    id: 5735776,
    name: '123 Industries',
    is_active: true,
    address: '123 Main St.\r\nAnytown, LA 71223',
    created_at: '2017-06-26T21:02:12Z',
    updated_at: '2017-06-26T21:34:11Z',
    currency: 'EUR'
  },
  {
    id: 5735774,
    name: 'ABC Corp',
    is_active: true,
    address: '456 Main St.\r\nAnytown, CT 06467',
    created_at: '2017-06-26T21:01:52Z',
    updated_at: '2017-06-26T21:27:07Z',
    currency: 'USD'
  }
];

export const company: Company = {
  base_uri: 'https://{ACCOUNT_SUBDOMAIN}.harvestapp.com',
  full_domain: '{ACCOUNT_SUBDOMAIN}.harvestapp.com',
  name: 'API Examples',
  is_active: true,
  week_start_day: 'Monday',
  wants_timestamp_timers: true,
  time_format: 'hours_minutes',
  plan_type: 'sponsored',
  expense_feature: true,
  invoice_feature: true,
  estimate_feature: true,
  approval_feature: true,
  clock: '12h',
  decimal_symbol: '.',
  thousands_separator: ',',
  color_scheme: 'orange'
};

export const invoiceMessages: InvoiceMessage[] = [
  {
    id: 27835209,
    sent_by: 'Bob Powell',
    sent_by_email: 'bobpowell@example.com',
    sent_from: 'Bob Powell',
    sent_from_email: 'bobpowell@example.com',
    include_link_to_client_invoice: false,
    send_me_a_copy: false,
    thank_you: false,
    reminder: false,
    send_reminder_on: null,
    created_at: '2017-08-23T22:15:06Z',
    updated_at: '2017-08-23T22:15:06Z',
    attach_pdf: true,
    event_type: null,
    recipients: [
      {
        name: 'Richard Roe',
        email: 'richardroe@example.com'
      }
    ],
    subject: 'Past due invoice reminder: #1001 from API Examples',
    body:
      'Dear Customer,\r\n\r\nThis is a friendly reminder to let you know that Invoice 1001 is 144 days past due. If you have already sent the payment, please disregard this message. If not, we would appreciate your prompt attention to this matter.\r\n\r\nThank you for your business.\r\n\r\nCheers,\r\nAPI Examples'
  },
  {
    id: 27835207,
    sent_by: 'Bob Powell',
    sent_by_email: 'bobpowell@example.com',
    sent_from: 'Bob Powell',
    sent_from_email: 'bobpowell@example.com',
    include_link_to_client_invoice: false,
    send_me_a_copy: true,
    thank_you: false,
    reminder: false,
    send_reminder_on: null,
    created_at: '2017-08-23T22:14:49Z',
    updated_at: '2017-08-23T22:14:49Z',
    attach_pdf: true,
    event_type: null,
    recipients: [
      {
        name: 'Richard Roe',
        email: 'richardroe@example.com'
      },
      {
        name: 'Bob Powell',
        email: 'bobpowell@example.com'
      }
    ],
    subject: 'Invoice #1001 from API Examples',
    body:
      '---------------------------------------------\r\nInvoice Summary\r\n---------------------------------------------\r\nInvoice ID: 1001\r\nIssue Date: 04/01/2017\r\nClient: 123 Industries\r\nP.O. Number: \r\nAmount: €288.90\r\nDue: 04/01/2017 (upon receipt)\r\n\r\nThe detailed invoice is attached as a PDF.\r\n\r\nThank you!\r\n---------------------------------------------'
  }
];

export const invoicePayments: InvoicePayment[] = [
  {
    id: 10112854,
    amount: 10700,
    paid_at: '2017-02-21T00:00:00Z',
    paid_date: '2017-02-21',
    recorded_by: 'Alice Doe',
    recorded_by_email: 'alice@example.com',
    notes: 'Paid via check #4321',
    transaction_id: null,
    created_at: '2017-06-27T16:24:57Z',
    updated_at: '2017-06-27T16:24:57Z',
    payment_gateway: {
      id: 1234,
      name: 'Linkpoint International'
    }
  }
];

export const invoices: Invoice[] = [
  {
    id: 13150403,
    client_key: '21312da13d457947a217da6775477afee8c2eba8',
    number: '1001',
    purchase_order: '',
    amount: 288.9,
    due_amount: 288.9,
    tax: 5,
    tax_amount: 13.5,
    tax2: 2,
    tax2_amount: 5.4,
    discount: 10,
    discount_amount: 30,
    subject: 'Online Store - Phase 1',
    notes: 'Some notes about the invoice.',
    state: 'open',
    period_start: '2017-03-01',
    period_end: '2017-03-01',
    issue_date: '2017-04-01',
    due_date: '2017-04-01',
    sent_at: '2017-08-23T22:25:59Z',
    paid_at: null,
    paid_date: null,
    closed_at: null,
    created_at: '2017-06-27T16:27:16Z',
    updated_at: '2017-08-23T22:25:59Z',
    currency: 'EUR',
    client: {
      id: 5735776,
      name: '123 Industries'
    },
    estimate: null,
    retainer: null,
    creator: {
      id: 1782884,
      name: 'Bob Powell'
    },
    line_items: [
      {
        id: 53341602,
        kind: 'Service',
        description:
          '03/01/2017 - Project Management: [9:00am - 11:00am] Planning meetings',
        quantity: 2,
        unit_price: 100,
        amount: 200,
        taxed: true,
        taxed2: true,
        project: {
          id: 14308069,
          name: 'Online Store - Phase 1',
          code: 'OS1'
        }
      },
      {
        id: 53341603,
        kind: 'Service',
        description:
          '03/01/2017 - Programming: [1:00pm - 2:00pm] Importing products',
        quantity: 1,
        unit_price: 100,
        amount: 100,
        taxed: true,
        taxed2: true,
        project: {
          id: 14308069,
          name: 'Online Store - Phase 1',
          code: 'OS1'
        }
      }
    ]
  },
  {
    id: 13150378,
    client_key: '9e97f4a65c5b83b1fc02f54e5a41c9dc7d458542',
    number: '1000',
    purchase_order: '1234',
    amount: 10700.0,
    due_amount: 0.0,
    tax: 5.0,
    tax_amount: 500.0,
    tax2: 2.0,
    tax2_amount: 200.0,
    discount: null,
    discount_amount: 0.0,
    subject: 'Online Store - Phase 1',
    notes: 'Some notes about the invoice.',
    state: 'paid',
    period_start: null,
    period_end: null,
    issue_date: '2017-02-01',
    due_date: '2017-03-03',
    sent_at: '2017-02-01T07:00:00Z',
    paid_at: '2017-02-21T00:00:00Z',
    paid_date: '2017-02-21',
    closed_at: null,
    created_at: '2017-06-27T16:24:30Z',
    updated_at: '2017-06-27T16:24:57Z',
    currency: 'USD',
    client: {
      id: 5735776,
      name: '123 Industries'
    },
    estimate: {
      id: 1439814
    },
    retainer: null,
    creator: {
      id: 1782884,
      name: 'Bob Powell'
    },
    line_items: [
      {
        id: 53341450,
        kind: 'Service',
        description: '50% of Phase 1 of the Online Store',
        quantity: 100.0,
        unit_price: 100.0,
        amount: 10000.0,
        taxed: true,
        taxed2: true,
        project: {
          id: 14308069,
          name: 'Online Store - Phase 1',
          code: 'OS1'
        }
      }
    ]
  }
];

export const invoiceItemCategories: InvoiceItemCategory[] = [
  {
    id: 1466293,
    name: 'Product',
    use_as_service: false,
    use_as_expense: true,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T20:41:00Z'
  },
  {
    id: 1466292,
    name: 'Service',
    use_as_service: true,
    use_as_expense: false,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T20:41:00Z'
  }
];

export const estimateMessages: EstimateMessage[] = [
  {
    id: 2666236,
    sent_by: 'Bob Powell',
    sent_by_email: 'bobpowell@example.com',
    sent_from: 'Bob Powell',
    sent_from_email: 'bobpowell@example.com',
    send_me_a_copy: true,
    created_at: '2017-08-25T21:23:40Z',
    updated_at: '2017-08-25T21:23:40Z',
    recipients: [
      {
        name: 'Richard Roe',
        email: 'richardroe@example.com'
      },
      {
        name: 'Bob Powell',
        email: 'bobpowell@example.com'
      }
    ],
    event_type: null,
    subject: 'Estimate #1001 from API Examples',
    body:
      '---------------------------------------------\r\nEstimate Summary\r\n---------------------------------------------\r\nEstimate ID: 1001\r\nEstimate Date: 06/01/2017\r\nClient: 123 Industries\r\nP.O. Number: 5678\r\nAmount: $9,630.00\r\n\r\nYou can view the estimate here:\r\n\r\n%estimate_url%\r\n\r\nThank you!\r\n---------------------------------------------'
  }
];

export const estimates: Estimate[] = [
  {
    id: 1439818,
    client_key: '13dc088aa7d51ec687f186b146730c3c75dc7423',
    number: '1001',
    purchase_order: '5678',
    amount: 9630.0,
    tax: 5.0,
    tax_amount: 450.0,
    tax2: 2.0,
    tax2_amount: 180.0,
    discount: 10.0,
    discount_amount: 1000.0,
    subject: 'Online Store - Phase 2',
    notes: 'Some notes about the estimate',
    state: 'sent',
    issue_date: '2017-06-01',
    sent_at: '2017-06-27T16:11:33Z',
    created_at: '2017-06-27T16:11:24Z',
    updated_at: '2017-06-27T16:13:56Z',
    accepted_at: null,
    declined_at: null,
    currency: 'USD',
    client: {
      id: 5735776,
      name: '123 Industries'
    },
    creator: {
      id: 1782884,
      name: 'Bob Powell'
    },
    line_items: [
      {
        id: 53334195,
        kind: 'Service',
        description: 'Phase 2 of the Online Store',
        quantity: 100,
        unit_price: 100,
        amount: 10000,
        taxed: true,
        taxed2: true
      }
    ]
  },
  {
    id: 1439814,
    client_key: 'a5ffaeb30c55776270fcd3992b70332d769f97e7',
    number: '1000',
    purchase_order: '1234',
    amount: 21000.0,
    tax: 5.0,
    tax_amount: 1000.0,
    tax2: null,
    tax2_amount: 0.0,
    discount: null,
    discount_amount: 0.0,
    subject: 'Online Store - Phase 1',
    notes: 'Some notes about the estimate',
    state: 'accepted',
    issue_date: '2017-01-01',
    sent_at: '2017-06-27T16:10:30Z',
    created_at: '2017-06-27T16:09:33Z',
    updated_at: '2017-06-27T16:12:00Z',
    accepted_at: '2017-06-27T16:10:32Z',
    declined_at: null,
    currency: 'USD',
    client: {
      id: 5735776,
      name: '123 Industries'
    },
    creator: {
      id: 1782884,
      name: 'Bob Powell'
    },
    line_items: [
      {
        id: 57531966,
        kind: 'Service',
        description: 'Phase 1 of the Online Store',
        quantity: 1,
        unit_price: 20000,
        amount: 20000,
        taxed: true,
        taxed2: false
      }
    ]
  }
];

export const estimateItemCategories: EstimateItemCategory[] = [
  {
    id: 1378704,
    name: 'Product',
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T20:41:00Z'
  },
  {
    id: 1378703,
    name: 'Service',
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T20:41:00Z'
  }
];

export const expenses: Expense[] = [
  {
    id: 15296442,
    notes: 'Lunch with client',
    total_cost: 33.35,
    units: 1.0,
    is_closed: false,
    is_locked: true,
    is_billed: true,
    locked_reason: 'Expense is invoiced.',
    spent_date: '2017-03-03',
    created_at: '2017-06-27T15:09:54Z',
    updated_at: '2017-06-27T16:47:14Z',
    billable: true,
    receipt: {
      url:
        'https://{ACCOUNT_SUBDOMAIN}.harvestapp.com/expenses/15296442/receipt',
      file_name: 'lunch_receipt.gif',
      file_size: 39410,
      content_type: 'image/gif'
    },
    user: {
      id: 1782959,
      name: 'Kim Allen'
    },
    user_assignment: {
      id: 125068553,
      is_project_manager: true,
      is_active: true,
      budget: null,
      created_at: '2017-06-26T22:32:52Z',
      updated_at: '2017-06-26T22:32:52Z',
      hourly_rate: 100.0
    },
    project: {
      id: 14307913,
      name: 'Marketing Website',
      code: 'MW'
    },
    expense_category: {
      id: 4195926,
      name: 'Meals',
      unit_price: null,
      unit_name: null
    },
    client: {
      id: 5735774,
      name: 'ABC Corp',
      currency: 'USD'
    },
    invoice: {
      id: 13150403,
      number: '1001'
    }
  },
  {
    id: 15296423,
    notes: 'Hotel stay for meeting',
    total_cost: 100.0,
    units: 1.0,
    is_closed: true,
    is_locked: true,
    is_billed: false,
    locked_reason: 'The project is locked for this time period.',
    spent_date: '2017-03-01',
    created_at: '2017-06-27T15:09:17Z',
    updated_at: '2017-06-27T16:47:14Z',
    billable: true,
    receipt: null,
    user: {
      id: 1782959,
      name: 'Kim Allen'
    },
    user_assignment: {
      id: 125068554,
      is_project_manager: true,
      is_active: true,
      budget: null,
      created_at: '2017-06-26T22:32:52Z',
      updated_at: '2017-06-26T22:32:52Z',
      hourly_rate: 100.0
    },
    project: {
      id: 14308069,
      name: 'Online Store - Phase 1',
      code: 'OS1'
    },
    expense_category: {
      id: 4197501,
      name: 'Lodging',
      unit_price: null,
      unit_name: null
    },
    client: {
      id: 5735776,
      name: '123 Industries',
      currency: 'EUR'
    },
    invoice: null
  }
];

export const expenseCategories: ExpenseCategory[] = [
  {
    id: 4197501,
    name: 'Lodging',
    unit_name: null,
    unit_price: null,
    is_active: true,
    created_at: '2017-06-27T15:01:32Z',
    updated_at: '2017-06-27T15:01:32Z'
  },
  {
    id: 4195930,
    name: 'Mileage',
    unit_name: 'mile',
    unit_price: 0.535,
    is_active: true,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T20:41:00Z'
  },
  {
    id: 4195928,
    name: 'Transportation',
    unit_name: null,
    unit_price: null,
    is_active: true,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T20:41:00Z'
  },
  {
    id: 4195926,
    name: 'Meals',
    unit_name: null,
    unit_price: null,
    is_active: true,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T20:41:00Z'
  }
];

export const tasks: Task[] = [
  {
    id: 8083800,
    name: 'Business Development',
    billable_by_default: false,
    default_hourly_rate: 0.0,
    is_default: false,
    is_active: true,
    created_at: '2017-06-26T22:08:25Z',
    updated_at: '2017-06-26T22:08:25Z'
  },
  {
    id: 8083369,
    name: 'Research',
    billable_by_default: false,
    default_hourly_rate: 0.0,
    is_default: true,
    is_active: true,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T21:53:34Z'
  },
  {
    id: 8083368,
    name: 'Project Management',
    billable_by_default: true,
    default_hourly_rate: 100.0,
    is_default: true,
    is_active: true,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T21:14:10Z'
  },
  {
    id: 8083366,
    name: 'Programming',
    billable_by_default: true,
    default_hourly_rate: 100.0,
    is_default: true,
    is_active: true,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T21:14:07Z'
  },
  {
    id: 8083365,
    name: 'Graphic Design',
    billable_by_default: true,
    default_hourly_rate: 100.0,
    is_default: true,
    is_active: true,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T21:14:02Z'
  }
];

export const timeEntries: TimeEntry[] = [
  {
    id: 636709355,
    spent_date: '2017-03-02',
    user: {
      id: 1782959,
      name: 'Kim Allen'
    },
    client: {
      id: 5735774,
      name: 'ABC Corp'
    },
    project: {
      id: 14307913,
      name: 'Marketing Website'
    },
    task: {
      id: 8083365,
      name: 'Graphic Design'
    },
    user_assignment: {
      id: 125068553,
      is_project_manager: true,
      is_active: true,
      budget: null,
      created_at: '2017-06-26T22:32:52Z',
      updated_at: '2017-06-26T22:32:52Z',
      hourly_rate: 100.0
    },
    task_assignment: {
      id: 155502709,
      billable: true,
      is_active: true,
      created_at: '2017-06-26T21:36:23Z',
      updated_at: '2017-06-26T21:36:23Z',
      hourly_rate: 100.0,
      budget: null
    },
    hours: 2.0,
    notes: 'Adding CSS styling',
    created_at: '2017-06-27T15:50:15Z',
    updated_at: '2017-06-27T16:47:14Z',
    is_locked: true,
    locked_reason: 'Item Approved and Locked for this Time Period',
    is_closed: true,
    is_billed: false,
    timer_started_at: null,
    started_time: '3:00pm',
    ended_time: '5:00pm',
    is_running: false,
    invoice: null,
    external_reference: null,
    billable: true,
    budgeted: true,
    billable_rate: 100.0,
    cost_rate: 50.0
  },
  {
    id: 636708723,
    spent_date: '2017-03-01',
    user: {
      id: 1782959,
      name: 'Kim Allen'
    },
    client: {
      id: 5735776,
      name: '123 Industries'
    },
    project: {
      id: 14308069,
      name: 'Online Store - Phase 1'
    },
    task: {
      id: 8083366,
      name: 'Programming'
    },
    user_assignment: {
      id: 125068554,
      is_project_manager: true,
      is_active: true,
      budget: null,
      created_at: '2017-06-26T22:32:52Z',
      updated_at: '2017-06-26T22:32:52Z',
      hourly_rate: 100.0
    },
    task_assignment: {
      id: 155505014,
      billable: true,
      is_active: true,
      created_at: '2017-06-26T21:52:18Z',
      updated_at: '2017-06-26T21:52:18Z',
      hourly_rate: 100.0,
      budget: null
    },
    hours: 1.0,
    notes: 'Importing products',
    created_at: '2017-06-27T15:49:28Z',
    updated_at: '2017-06-27T16:47:14Z',
    is_locked: true,
    locked_reason: 'Item Invoiced and Approved and Locked for this Time Period',
    is_closed: true,
    is_billed: true,
    timer_started_at: null,
    started_time: '1:00pm',
    ended_time: '2:00pm',
    is_running: false,
    invoice: {
      id: 13150403,
      number: '1001'
    },
    external_reference: null,
    billable: true,
    budgeted: true,
    billable_rate: 100.0,
    cost_rate: 50.0
  },
  {
    id: 636708574,
    spent_date: '2017-03-01',
    user: {
      id: 1782959,
      name: 'Kim Allen'
    },
    client: {
      id: 5735776,
      name: '123 Industries'
    },
    project: {
      id: 14308069,
      name: 'Online Store - Phase 1'
    },
    task: {
      id: 8083369,
      name: 'Research'
    },
    user_assignment: {
      id: 125068554,
      is_project_manager: true,
      is_active: true,
      budget: null,
      created_at: '2017-06-26T22:32:52Z',
      updated_at: '2017-06-26T22:32:52Z',
      hourly_rate: 100.0
    },
    task_assignment: {
      id: 155505016,
      billable: false,
      is_active: true,
      created_at: '2017-06-26T21:52:18Z',
      updated_at: '2017-06-26T21:54:06Z',
      hourly_rate: 100.0,
      budget: null
    },
    hours: 1.0,
    notes: 'Evaluating 3rd party libraries',
    created_at: '2017-06-27T15:49:17Z',
    updated_at: '2017-06-27T16:47:14Z',
    is_locked: true,
    locked_reason: 'Item Approved and Locked for this Time Period',
    is_closed: true,
    is_billed: false,
    timer_started_at: null,
    started_time: '11:00am',
    ended_time: '12:00pm',
    is_running: false,
    invoice: null,
    external_reference: null,
    billable: false,
    budgeted: true,
    billable_rate: null,
    cost_rate: 50.0
  },
  {
    id: 636707831,
    spent_date: '2017-03-01',
    user: {
      id: 1782959,
      name: 'Kim Allen'
    },
    client: {
      id: 5735776,
      name: '123 Industries'
    },
    project: {
      id: 14308069,
      name: 'Online Store - Phase 1'
    },
    task: {
      id: 8083368,
      name: 'Project Management'
    },
    user_assignment: {
      id: 125068554,
      is_project_manager: true,
      is_active: true,
      budget: null,
      created_at: '2017-06-26T22:32:52Z',
      updated_at: '2017-06-26T22:32:52Z',
      hourly_rate: 100.0
    },
    task_assignment: {
      id: 155505015,
      billable: true,
      is_active: true,
      created_at: '2017-06-26T21:52:18Z',
      updated_at: '2017-06-26T21:52:18Z',
      hourly_rate: 100.0,
      budget: null
    },
    hours: 2.0,
    notes: 'Planning meetings',
    created_at: '2017-06-27T15:48:24Z',
    updated_at: '2017-06-27T16:47:14Z',
    is_locked: true,
    locked_reason: 'Item Invoiced and Approved and Locked for this Time Period',
    is_closed: true,
    is_billed: true,
    timer_started_at: null,
    started_time: '9:00am',
    ended_time: '11:00am',
    is_running: false,
    invoice: {
      id: 13150403,
      number: '1001'
    },
    external_reference: null,
    billable: true,
    budgeted: true,
    billable_rate: 100.0,
    cost_rate: 50.0
  }
];

export const userAssignments: UserAssignment[] = [
  {
    id: 125068554,
    is_project_manager: true,
    is_active: true,
    budget: null,
    created_at: '2017-06-26T22:32:52Z',
    updated_at: '2017-06-26T22:32:52Z',
    hourly_rate: 100.0,
    user: {
      id: 1782959,
      name: 'Kim Allen'
    }
  },
  {
    id: 125066109,
    is_project_manager: true,
    is_active: true,
    budget: null,
    created_at: '2017-06-26T21:52:18Z',
    updated_at: '2017-06-26T21:52:18Z',
    hourly_rate: 100.0,
    user: {
      id: 1782884,
      name: 'Bob Powell'
    }
  }
];

export const taskAssignments: TaskAssignment[] = [
  {
    id: 155505016,
    billable: false,
    is_active: true,
    created_at: '2017-06-26T21:52:18Z',
    updated_at: '2017-06-26T21:54:06Z',
    task: {
      id: 8083369,
      name: 'Research'
    },
    hourly_rate: 100.0,
    budget: null
  },
  {
    id: 155505015,
    billable: true,
    is_active: true,
    created_at: '2017-06-26T21:52:18Z',
    updated_at: '2017-06-26T21:52:18Z',
    task: {
      id: 8083368,
      name: 'Project Management'
    },
    hourly_rate: 100.0,
    budget: null
  },
  {
    id: 155505014,
    billable: true,
    is_active: true,
    created_at: '2017-06-26T21:52:18Z',
    updated_at: '2017-06-26T21:52:18Z',
    task: {
      id: 8083366,
      name: 'Programming'
    },
    hourly_rate: 100.0,
    budget: null
  },
  {
    id: 155505013,
    billable: true,
    is_active: true,
    created_at: '2017-06-26T21:52:18Z',
    updated_at: '2017-06-26T21:52:18Z',
    task: {
      id: 8083365,
      name: 'Graphic Design'
    },
    hourly_rate: 100.0,
    budget: null
  }
];

export const projects: Project[] = [
  {
    id: 14308069,
    name: 'Online Store - Phase 1',
    code: 'OS1',
    is_active: true,
    bill_by: 'Project',
    budget: 200.0,
    budget_by: 'project',
    notify_when_over_budget: true,
    over_budget_notification_percentage: 80.0,
    over_budget_notification_date: null,
    show_budget_to_all: false,
    created_at: '2017-06-26T21:52:18Z',
    updated_at: '2017-06-26T21:54:06Z',
    starts_on: '2017-06-01',
    ends_on: null,
    is_billable: true,
    is_fixed_fee: false,
    notes: '',
    client: {
      id: 5735776,
      name: '123 Industries',
      currency: 'EUR'
    },
    cost_budget: null,
    cost_budget_include_expenses: false,
    hourly_rate: 100.0,
    fee: null
  },
  {
    id: 14307913,
    name: 'Marketing Website',
    code: 'MW',
    is_active: true,
    bill_by: 'Project',
    budget: 50.0,
    budget_by: 'project',
    notify_when_over_budget: true,
    over_budget_notification_percentage: 80.0,
    over_budget_notification_date: null,
    show_budget_to_all: false,
    created_at: '2017-06-26T21:36:23Z',
    updated_at: '2017-06-26T21:54:46Z',
    starts_on: '2017-01-01',
    ends_on: '2017-03-31',
    is_billable: true,
    is_fixed_fee: false,
    notes: '',
    client: {
      id: 5735774,
      name: 'ABC Corp',
      currency: 'USD'
    },
    cost_budget: null,
    cost_budget_include_expenses: false,
    hourly_rate: 100.0,
    fee: null
  }
];

export const roles: Role[] = [
  {
    id: 1782974,
    name: 'Founder',
    user_ids: [8083365],
    created_at: '2017-06-26T22:34:41Z',
    updated_at: '2017-06-26T22:34:52Z'
  },
  {
    id: 1782959,
    name: 'Developer',
    user_ids: [8083366],
    created_at: '2017-06-26T22:15:45Z',
    updated_at: '2017-06-26T22:32:52Z'
  },
  {
    id: 1782884,
    name: 'Designer',
    user_ids: [8083367],
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T20:42:25Z'
  }
];

export const projectAssignments: ProjectAssignment[] = [
  {
    id: 125068554,
    is_project_manager: true,
    is_active: true,
    budget: null,
    created_at: '2017-06-26T22:32:52Z',
    updated_at: '2017-06-26T22:32:52Z',
    hourly_rate: 100.0,
    project: {
      id: 14308069,
      name: 'Online Store - Phase 1',
      code: 'OS1'
    },
    client: {
      id: 5735776,
      name: '123 Industries'
    },
    task_assignments: [
      {
        id: 155505013,
        billable: true,
        is_active: true,
        created_at: '2017-06-26T21:52:18Z',
        updated_at: '2017-06-26T21:52:18Z',
        hourly_rate: 100.0,
        budget: null,
        task: {
          id: 8083365,
          name: 'Graphic Design'
        }
      },
      {
        id: 155505014,
        billable: true,
        is_active: true,
        created_at: '2017-06-26T21:52:18Z',
        updated_at: '2017-06-26T21:52:18Z',
        hourly_rate: 100.0,
        budget: null,
        task: {
          id: 8083366,
          name: 'Programming'
        }
      },
      {
        id: 155505015,
        billable: true,
        is_active: true,
        created_at: '2017-06-26T21:52:18Z',
        updated_at: '2017-06-26T21:52:18Z',
        hourly_rate: 100.0,
        budget: null,
        task: {
          id: 8083368,
          name: 'Project Management'
        }
      },
      {
        id: 155505016,
        billable: false,
        is_active: true,
        created_at: '2017-06-26T21:52:18Z',
        updated_at: '2017-06-26T21:54:06Z',
        hourly_rate: 100.0,
        budget: null,
        task: {
          id: 8083369,
          name: 'Research'
        }
      }
    ]
  },
  {
    id: 125068553,
    is_project_manager: true,
    is_active: true,
    budget: null,
    created_at: '2017-06-26T22:32:52Z',
    updated_at: '2017-06-26T22:32:52Z',
    hourly_rate: 100.0,
    project: {
      id: 14307913,
      name: 'Marketing Website',
      code: 'MW'
    },
    client: {
      id: 5735774,
      name: 'ABC Corp'
    },
    task_assignments: [
      {
        id: 155502709,
        billable: true,
        is_active: true,
        created_at: '2017-06-26T21:36:23Z',
        updated_at: '2017-06-26T21:36:23Z',
        hourly_rate: 100.0,
        budget: null,
        task: {
          id: 8083365,
          name: 'Graphic Design'
        }
      },
      {
        id: 155502710,
        billable: true,
        is_active: true,
        created_at: '2017-06-26T21:36:23Z',
        updated_at: '2017-06-26T21:36:23Z',
        hourly_rate: 100.0,
        budget: null,
        task: {
          id: 8083366,
          name: 'Programming'
        }
      },
      {
        id: 155502711,
        billable: true,
        is_active: true,
        created_at: '2017-06-26T21:36:23Z',
        updated_at: '2017-06-26T21:36:23Z',
        hourly_rate: 100.0,
        budget: null,
        task: {
          id: 8083368,
          name: 'Project Management'
        }
      },
      {
        id: 155505153,
        billable: false,
        is_active: true,
        created_at: '2017-06-26T21:53:20Z',
        updated_at: '2017-06-26T21:54:31Z',
        hourly_rate: 100.0,
        budget: null,
        task: {
          id: 8083369,
          name: 'Research'
        }
      }
    ]
  }
];

export const users: User[] = [
  {
    id: 1782974,
    first_name: 'Jim',
    last_name: 'Allen',
    email: 'jimallen@example.com',
    telephone: '',
    timezone: 'Mountain Time (US & Canada)',
    has_access_to_all_future_projects: false,
    is_contractor: false,
    is_admin: false,
    is_project_manager: false,
    can_see_rates: false,
    can_create_projects: false,
    can_create_invoices: false,
    is_active: true,
    created_at: '2017-06-26T22:34:41Z',
    updated_at: '2017-06-26T22:34:52Z',
    weekly_capacity: 126000,
    default_hourly_rate: 100.0,
    cost_rate: 50.0,
    roles: ['Developer'],
    avatar_url:
      'https://cache.harvestapp.com/assets/profile_images/abraj_albait_towers.png?1498516481'
  },
  {
    id: 1782959,
    first_name: 'Kim',
    last_name: 'Allen',
    email: 'kimallen@example.com',
    telephone: '',
    timezone: 'Eastern Time (US & Canada)',
    has_access_to_all_future_projects: true,
    is_contractor: false,
    is_admin: false,
    is_project_manager: true,
    can_see_rates: false,
    can_create_projects: false,
    can_create_invoices: false,
    is_active: true,
    created_at: '2017-06-26T22:15:45Z',
    updated_at: '2017-06-26T22:32:52Z',
    weekly_capacity: 126000,
    default_hourly_rate: 100.0,
    cost_rate: 50.0,
    roles: ['Designer'],
    avatar_url:
      'https://cache.harvestapp.com/assets/profile_images/cornell_clock_tower.png?1498515345'
  },
  {
    id: 1782884,
    first_name: 'Bob',
    last_name: 'Powell',
    email: 'bobpowell@example.com',
    telephone: '',
    timezone: 'Mountain Time (US & Canada)',
    has_access_to_all_future_projects: false,
    is_contractor: false,
    is_admin: true,
    is_project_manager: false,
    can_see_rates: true,
    can_create_projects: true,
    can_create_invoices: true,
    is_active: true,
    created_at: '2017-06-26T20:41:00Z',
    updated_at: '2017-06-26T20:42:25Z',
    weekly_capacity: 126000,
    default_hourly_rate: 100.0,
    cost_rate: 75.0,
    roles: ['Founder', 'CEO'],
    avatar_url:
      'https://cache.harvestapp.com/assets/profile_images/allen_bradley_clock_tower.png?1498509661'
  }
];
