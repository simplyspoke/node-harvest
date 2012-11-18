var restler = require('restler'),
    querystring = require('querystring'),
    util = require('util'),
    Harvest;

module.exports = Harvest = function(opts) {
    var self = this;

    if (typeof opts.subdomain === "undefined")
        throw new Error('The Harvest API client requires a subdomain');

    this.use_oauth = (typeof opts.identifier !== "undefined" &&
                      typeof opts.secret !== "undefined");
    this.use_basic_auth = (typeof opts.email !== "undefined" &&
                           typeof opts.password !== "undefined");

    if (!this.use_oauth && !this.use_basic_auth)
        throw new Error('The Harvest API client requires credentials for basic authentication or an identifier and secret for OAuth');

    this.subdomain = opts.subdomain;
    this.host = "https://" + this.subdomain + ".harvestapp.com";
    this.email = opts.email;
    this.password = opts.password;
    this.identifier = opts.identifier;
    this.secret = opts.secret;
    this.user_agent = opts.user_agent;

    var restService = restler.service(function(u, p) {
        this.defaults.username = u;
        this.defaults.password = p;
    }, {
        baseURL: self.host
    }, {

        run: function(type, url, data) {
	    console.log('run', type, url, data);
            var opts = {};
            opts.headers = {
                'Content-Type': 'application/xml',
                'Accept': 'application/xml'
            };

            if (typeof data !== 'undefined') {
                if (typeof data === 'object') {
                    opts.headers['Content-Length'] = querystring.stringify(data).length;
                } else {
                    opts.headers['Content-Length'] = data.length;
                }
            } else {
                opts.headers['Content-Length'] = 0;
            }

            opts.data = data;
            switch(type) {
            case 'get':
                return this.get(url, opts);
                break;

            case 'post':
                return this.post(url, opts);
                break;

            case 'put':
                return this.put(url, opts);
                break;

            case 'delete':
                return this.del(url, opts);
                break;
            }
            return this;
        }
    });

    this.processRequest = function(res, cb) {
	//console.log('processRequest', cb);

	if (typeof cb !== "function") throw new Error('processRequest: Callback is not defined');

        res.addListener('success', function(data, res) {

            //console.log('success', util.inspect(data, false, 10));

            // TODO Xml sucks and the JSON it generates is horrendous
            // this default response could be greatly simplified for all requests
            cb(null, data);

        }).addListener('error', cb);
    };

    this.service = new restService(this.email, this.password);

    this.client = {
        get: function(url, data, cb) {
            self.processRequest(self.service.run('get', url, data), cb);
        },
        patch: function(url, data, cb) {
            self.processRequest(self.service.run('patch', url, data), cb);
        },
        post: function(url, data, cb) {
            self.processRequest(self.service.run('post', url, data), cb);
        },
        put: function(url, data, cb) {
            self.processRequest(self.service.run('put', url, data), cb);
        },
        delete: function(url, data, cb) {
            self.processRequest(self.service.run('delete', url, data), cb);
        }
    };

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
