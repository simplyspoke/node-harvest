'use strict';

var restler = require('restler'),
  qs = require('qs'),
  util = require('util'),
  isUndefined = require('./mixins').isUndefined,
  Throttle = require('./throttle.js');

var Harvest = function(options) {
  var self = this;

  if (isUndefined(options, 'subdomain')) {
    throw new Error('The Harvest API client requires a subdomain');
  }

  self.use_oauth = ((options.identifier !== undefined && options.secret !== undefined && options.redirect_uri !== undefined) || (options.identifier !== undefined && options.secret !== undefined) || options.access_token !== undefined);
  self.use_basic_auth = (options.email !== undefined &&
    options.password !== undefined);

  if (!self.use_oauth && !self.use_basic_auth) {
    throw new Error('The Harvest API client requires credentials for basic authentication or an identifier, secret and redirect_uri (or an access_token) for OAuth');
  }

  self.host = 'https://' + options.subdomain + '.harvestapp.com';
  self.email = options.email;
  self.password = options.password;
  self.identifier = options.identifier;
  self.secret = options.secret;
  self.redirect_uri = options.redirect_uri;
  self.access_token = options.access_token || false;
  self.user_agent = options.user_agent;
  self.debug = options.debug || false;
  self.throttle_concurrency = options.throttle_concurrency || null;

  var RestService = restler.service(function(username, password) {
    this.defaults.username = username;
    this.defaults.password = password;
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

      var options = {};
      options.headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };

      if (typeof data !== 'undefined') {
        if (typeof data === 'object') {
          // restler uses url encoding to transmit data
          // url encoding does not support data types
          data = JSON.stringify(data);
          options.headers['Content-Length'] = data.length;
        } else {
          options.headers['Content-Length'] = data.length;
        }
      } else {
        options.headers['Content-Length'] = 0;
      }

      options.data = data;
      switch (type) {
        case 'get':
          return this.get(url, options);

        case 'post':
          return this.post(url, options);

        case 'put':
          return this.put(url, options);

        case 'delete':
          return this.del(url, options);
      }
      return this;
    }
  });

  self.service = new RestService(self.email, self.password);
  self.throttle = new Throttle(self.throttle_concurrency);

  self.client = {
    get: function(url, data, cb) {
      if (Object.keys(data).length) {
        var query = qs.stringify(data, {
          arrayFormat: 'brackets'
        });

        if (typeof query == 'string' && query.length > 0) {
          url.indexOf('?') > -1 ? url + '&' + query : url + '?' + query;
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
    self.getAccessTokenURL = function() {
      return self.host +
        '/oauth2/authorize?client_id=' + self.identifier +
        '&redirect_uri=' + encodeURIComponent(self.redirect_uri) +
        '&response_type=code';
    };

    self.parseAccessCode = function(access_code, cb) {
      self.access_code = access_code;

      var options = {
        'code': self.access_code,
        'client_id': self.identifier,
        'client_secret': self.secret,
        'redirect_uri': self.redirect_uri,
        'grant_type': 'authorization_code'
      };

      if (self.debug) {
        console.log('request token', options);
      }

      restler.post(self.host + '/oauth2/token', {
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
