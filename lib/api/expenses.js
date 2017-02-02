'use strict';

const fs = require('fs');
const request = require('request');
const helpers = require('../helpers');

function Expenses(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

Expenses.prototype.list = function(options, cb) {
  let uri = '/expenses';

  this.harvest.request('GET', uri, options, cb);
};

Expenses.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('retrieving a single exspense requires an id'));
  }

  let uri = '/expenses/' + options.id;
  delete options.id;

  this.harvest.request('GET', uri, {}, cb);
};

Expenses.prototype.create = function(options, cb) {
  let uri = '/expenses';

  this.harvest.request('POST', uri, options, cb);
};

Expenses.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a single expense requires an id'));
  }

  let uri = '/expenses/' + options.id;
  delete options.id;

  this.harvest.request('PUT', uri, options, cb);
};

Expenses.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting a single expense requires an id'));
  }

  let uri = '/expenses/' + options.id;
  delete options.id;

  this.harvest.request('DELETE', uri, {}, cb);
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

  const uri = '/expenses/' + options.id + '/receipt';

  options = {
    formData: {
      'expense[receipt]': {
        value: fs.createReadStream(options.file.path),
        options: {
          filename: options.file.originalname
        }
      }
    }
  };

  this.harvest.request('POST', uri, options, cb);
};

Expenses.prototype.getReceipt = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting a receipt requires an id'));
  }

  let uri = '/expenses/' + options.id + '/receipt';
  delete options.id;

  this.harvest.request('GET', uri, {}, cb);
};

module.exports = Expenses;
