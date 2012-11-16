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

    this.TimeTracking = require('./lib/time-tracking')(this);
    this.Clients = require('./lib/clients')(this);
    this.ClientContacts = require('./lib/client-contacts')(this);
    this.Projects = require('./lib/projects')(this);
    this.Tasks = require('./lib/tasks')(this);
    this.People = require('./lib/people')(this);
    this.ExpenseCategories = require('./lib/expense-categories')(this);
    this.Expenses = require('./lib/expenses')(this);
    this.UserAssignment = require('./lib/user-assignment')(this);
    this.TaskAssignment = require('./lib/task-assignment')(this);
    this.Reports = require('./lib/reports')(this);
    this.Invoices = require('./lib/invoices')(this);
    this.InvoiceMessages = require('./lib/invoice-messages')(this);
    this.InvoicePayments = require('./lib/invoice-payments')(this);
    this.InvoiceCategories = require('./lib/invoice-categories')(this);

    return this;

};
