'use strict';

const assign = require('lodash/assign');
const fs = require('fs');
const request = require('request');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

function Expenses(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'expense';
  this.baseUri = `/${this.name}s/`;
}

assign(Expenses.prototype, apiBase);

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

  const uri = this.baseUri + options.id + '/receipt';

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

  let uri = this.baseUri + options.id + '/receipt';
  delete options.id;

  this.harvest.request('GET', uri, {}, cb);
};

module.exports = Expenses;
