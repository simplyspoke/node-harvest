'use strict';

var restler = require('restler'),
  qs = require('qs'),
  util = require('util'),
  _isUndefined = require('./mixin'),
  Throttle = require('./throttle.js');

var Harvest = function(opts) {
  var self = this;

  if (_isUndefined(opts, 'subdomain')) {
    throw new Error('The Harvest API client requires a subdomain');
  }

  this.use_oauth = ((opts.identifier !== undefined && opts.secret !== undefined && opts.redirect_uri !== undefined) || (opts.identifier !== undefined && opts.secret !== undefined) || opts.access_token !== undefined);
  this.use_basic_auth = (opts.email !== undefined &&
    opts.password !== undefined);

  if (!this.use_oauth && !this.use_basic_auth) {
    throw new Error('The Harvest API client requires credentials for basic authentication or an identifier, secret and redirect_uri (or an access_token) for OAuth');
  }

  this.subdomain = opts.subdomain;
  this.host = 'https://' + this.subdomain + '.harvestapp.com';
  this.email = opts.email;
  this.password = opts.password;
  this.identifier = opts.identifier;
  this.secret = opts.secret;
  this.redirect_uri = opts.redirect_uri;
  this.access_token = opts.access_token || false;
  this.user_agent = opts.user_agent;
  this.debug = opts.debug || false;
  this.throttle_concurrency = opts.throttle_concurrency || null;

  var RestService = restler.service(function(u, p) {
    this.defaults.username = u;
    this.defaults.password = p;
  }, {
    baseURL: self.host
  }, {
    run: function(type, url, data) {
      if (self.debug) {
        console.log('run', type, url, data);
      }

      if (self.use_oauth) {
        if (!self.access_token) {
          throw new Error('An access token is required if using oAuth, use parseAccessCode or pass an access_token before making any requests');
        }
        url = url.indexOf('?') > -1 ? url + '&access_token=' + self.access_token : url + '?access_token=' + self.access_token;
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

  this.service = new RestService(this.email, this.password);
  this.throttle = new Throttle(this.throttle_concurrency);

  this.client = {
    get: function(url, data, cb) {
      if (Object.keys(data).length) {
        var query = qs.stringify(data, {
          arrayFormat: 'brackets'
        });

        if (typeof query == 'string' && query.length > 0) {
          url += '?' + query;
        }
      }

      self.throttle.push(function() {
        return self.service.run('get', url, {});
      }, cb);
    },
    patch: function(url, data, cb) {
      self.throttle.push(function() {
        return self.service.run('patch', url, data);
      }, cb);
    },
    post: function(url, data, cb) {
      self.throttle.push(function() {
        return self.service.run('post', url, data);
      }, cb);
    },
    put: function(url, data, cb) {
      self.throttle.push(function() {
        return self.service.run('put', url, data);
      }, cb);
    },
    delete: function(url, data, cb) {
      self.throttle.push(function() {
        return self.service.run('delete', url, data);
      }, cb);
    }
  };

  if (self.use_oauth) {
    this.getAccessTokenURL = function() {
      return this.host +
        '/oauth2/authorize?client_id=' + this.identifier +
        '&redirect_uri=' + encodeURIComponent(this.redirect_uri) +
        '&response_type=code';
    };

    this.parseAccessCode = function(access_code, cb) {
      var self = this;
      this.access_code = access_code;

      var options = {
        'code': this.access_code,
        'client_id': this.identifier,
        'client_secret': this.secret,
        'redirect_uri': this.redirect_uri,
        'grant_type': 'authorization_code'
      };

      if (self.debug) {
        console.log('request token', options);
      }

      restler.post(this.host + '/oauth2/token', {
        data: options
      }).on('complete', function(response) {
        if (!response.access_token) {
          throw new Error('Provided access code was rejected by Harvest, no token was returned');
        }

        self.access_token = response.access_token;

        cb(self.access_token);
      });
    };
  }

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

module.exports = Harvest;
