'use strict';

const fs = require('fs');
const request = require('request');
const helpers = require('../helpers');
const ofUseruri = require('../helpers').ofUseruri;

function Expenses(harvest) {
  this.harvest = harvest;
  this.request = harvest.request;
}

Expenses.prototype.list = function(options, cb) {
  let uri = '/expenses';
  uri = ofUseruri(uri, options);

  this.request('GET', uri, {}, cb);
};

Expenses.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('retrieving a single exspense requires an id'));
  }

  let uri = '/expenses/' + options.id;
  uri = ofUseruri(uri, options);

  this.request('GET', uri, {}, cb);
};

Expenses.prototype.create = function(options, cb) {
  let uri = '/expenses';
  uri = ofUseruri(uri, options);

  delete options.id;
  this.request('POST', uri, options, cb);
};

Expenses.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a single expense requires an id'));
  }

  let uri = '/expenses/' + options.id;
  uri = ofUseruri(uri, options);

  delete options.id;
  this.request('PUT', uri, options, cb);
};

Expenses.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting a single expense requires an id'));
  }

  let uri = '/expenses/' + options.id;
  uri = ofUseruri(uri, options);

  this.request('DELETE', uri, {}, cb);
};

Expenses.prototype.attachReceipt = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('attaching a receipt requires an id'));
  }

  if (!helpers.has(options, ['file'])) {
    return cb(new Error('attaching a receipt requires a file object'));
  }

  if (!helpers.has(options.file, 'path') || helpers.has(options.file, 'originalname')) {
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
    uri: this.api.host + '/expenses/' + options.id + '/receipt',
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
      bearer: this.api.accessToken
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
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting a receipt requires an id'));
  }

  let uri = '/expenses/' + options.id + '/receipt';
  uri = ofUseruri(uri, options);

  this.request('GET', uri, {}, cb);
};

module.exports = Expenses;
