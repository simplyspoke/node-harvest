var restler = require('restler'),
    querystring = require('querystring'),
    util = require('util'),
    _isUndefined = require('./mixin'),
    Throttle = require('./throttle.js'),
    Harvest;

module.exports = Harvest = function (opts) {
    var self = this;

    if (_isUndefined(opts,'subdomain')) {
        throw new Error('The Harvest API client requires a subdomain');
    }

    this.use_oauth = (opts.identifier !== undefined &&
                      opts.secret !== undefined);
    this.use_basic_auth = (opts.email !== undefined &&
                           opts.password !== undefined);

    if (!this.use_oauth && !this.use_basic_auth) {
        throw new Error('The Harvest API client requires credentials for basic authentication or an identifier and secret for OAuth');
    }

    this.subdomain = opts.subdomain;
    this.host = "https://" + this.subdomain + ".harvestapp.com";
    this.email = opts.email;
    this.password = opts.password;
    this.identifier = opts.identifier;
    this.secret = opts.secret;
    this.user_agent = opts.user_agent;
    this.debug = opts.debug || false;
    this.throttle_concurrency = opts.throttle_concurrency || null;

    var restService = restler.service(function (u, p) {
        this.defaults.username = u;
        this.defaults.password = p;
    }, {
        baseURL: self.host
    }, {
        run: function (type, url, data) {
            if (self.debug) {
                console.log('run', type, url, data);
            }

            var opts = {};
            opts.headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };

            if (typeof data !== 'undefined') {
                if (typeof data === 'object') {
                    // restler uses url encoding to transmit data
                    // url encoding does not support data types
                    data = JSON.stringify(data);
                    opts.headers['Content-Length'] = data.length;
                } else {
                    opts.headers['Content-Length'] = data.length;
                }
            } else {
                opts.headers['Content-Length'] = 0;
            }

            opts.data = data;
            switch (type) {
            case 'get':
                return this.get(url, opts);

            case 'post':
                return this.post(url, opts);

            case 'put':
                return this.put(url, opts);

            case 'delete':
                return this.del(url, opts);
            }
            return this;
        }
    });



    this.service = new restService(this.email, this.password);
    this.throttle = new Throttle(this.throttle_concurrency);



    this.client = {
        get: function (url, data, cb) {
            self.throttle.push(function () {return self.service.run('get', url, data);}, cb);
        },
        patch: function (url, data, cb) {
            self.throttle.push(function () {return self.service.run('patch', url, data);}, cb);
        },
        post: function (url, data, cb) {
            self.throttle.push(function () {return self.service.run('post', url, data);}, cb);
        },
        put: function (url, data, cb) {
            self.throttle.push(function () {return self.service.run('put', url, data);}, cb);
        },
        delete: function (url, data, cb) {
            self.throttle.push(function () {return self.service.run('delete', url, data);}, cb);
        }
    };



    var Account = require('./lib/account');
    var TimeTracking = require('./lib/time-tracking');
    var Clients = require('./lib/clients');
    var ClientContacts = require('./lib/client-contacts');
    var Projects = require('./lib/projects');
    var Tasks = require('./lib/tasks');
    var People = require('./lib/people');
    var ExpenseCategories = require('./lib/expense-categories');
    var Expenses = require('./lib/expenses');
    var UserAssignment = require('./lib/user-assignment');
    var TaskAssignment = require('./lib/task-assignment');
    var Reports = require('./lib/reports');
    var Invoices = require('./lib/invoices');
    var InvoiceMessages = require('./lib/invoice-messages');
    var InvoicePayments = require('./lib/invoice-payments');
    var InvoiceCategories = require('./lib/invoice-categories');

    this.Account = new Account(this);
    this.TimeTracking = new TimeTracking(this);
    this.Clients = new Clients(this);
    this.ClientContacts = new ClientContacts(this);
    this.Projects = new Projects(this);
    this.Tasks = new Tasks(this);
    this.People = new People(this);
    this.ExpenseCategories = new ExpenseCategories(this);
    this.Expenses = new Expenses(this);
    this.UserAssignment = new UserAssignment(this);
    this.TaskAssignment = new TaskAssignment(this);
    this.Reports = new Reports(this);
    this.Invoices = new Invoices(this);
    this.InvoiceMessages = new InvoiceMessages(this);
    this.InvoicePayments = new InvoicePayments(this);
    this.InvoiceCategories = new InvoiceCategories(this);

    return this;
};
