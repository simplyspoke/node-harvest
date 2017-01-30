'use strict';

let fs = require('fs');
let request = require('request');
const has = require('lodash/has');
let ofUserUrl = require('../mixins').ofUserUrl;

function Expenses(api) {
  this.api = api;
  this.client = api.client;
}

Expenses.prototype.list = function(options, cb) {
  let url = '/expenses';
  url = ofUserUrl(url, options);

  this.client(url, 'GET', {}, cb);
};

Expenses.prototype.get = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('retrieving a single exspense requires an id'));
  }

  let url = '/expenses/' + options.id;
  url = ofUserUrl(url, options);

  this.client(url, 'GET', {}, cb);
};

Expenses.prototype.create = function(options, cb) {
  let url = '/expenses';
  url = ofUserUrl(url, options);

  delete options.id;
  this.client(url, 'POST', options, cb);
};

Expenses.prototype.update = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('updating a single expense requires an id'));
  }

  let url = '/expenses/' + options.id;
  url = ofUserUrl(url, options);

  delete options.id;
  this.client(url, 'PUT', options, cb);
};

Expenses.prototype.delete = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('deleting a single expense requires an id'));
  }

  let url = '/expenses/' + options.id;
  url = ofUserUrl(url, options);

  this.client(url, 'DELETE', {}, cb);
};

Expenses.prototype.attachReceipt = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('attaching a receipt requires an id'));
  }

  if (!has(options, 'file')) {
    return cb(new Error('attaching a receipt requires a file object'));
  }

  if (!has(options.file, 'path') || has(options.file, 'originalname')) {
    return cb(new Error('file object must have a path and an originalname'));
  }

  let formData = {
    'expense[receipt]': {
      value: fs.createReadStream(options.file.path),
      options: {
        filename: options.file.originalname
      }
    }
  };

  options = {
    url: this.api.host + '/expenses/' + options.id + '/receipt',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Expenses'
    },
    formData: formData
  };

  if (this.api.use_basic_auth) {
    options.auth = {
      user: this.api.email,
      pass: this.api.password
    };
  } else {
    options.auth = {
      bearer: this.api.access_token
    }
  }

  // TODO: This function should be reworked into the core request calls to improve maintainability.
  request.post(options, function callback(err, httpResponse, body) {
    if (err) {
      return cb(err, {});
    }
    return cb(null, body);
  });
};

Expenses.prototype.getReceipt = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('getting a receipt requires an id'));
  }

  let url = '/expenses/' + options.id + '/receipt';
  url = ofUserUrl(url, options);

  this.client(url, 'GET', {}, cb);
};

module.exports = Expenses;
