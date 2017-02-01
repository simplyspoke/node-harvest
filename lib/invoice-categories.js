'use strict';

const helpers = require('../helpers');

function InvoiceCategories(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

InvoiceCategories.prototype.list = function(options, cb) {
  let url = '/invoice_item_categories';
  this.harvest.client('GET', url, {}, cb);
};

InvoiceCategories.prototype.create = function(options, cb) {
  let url = '/invoice_item_categories';
  this.harvest.client('POST', url, options, cb);
};

InvoiceCategories.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a single invoice category requires an id'));
  }

  let url = '/invoice_item_categories/' + options.id;
  delete options.id;
  this.harvest.client('PUT', url, options, cb);
};

InvoiceCategories.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting a single invoice category requires an id'));
  }

  let url = '/invoice_item_categories/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

module.exports = InvoiceCategories;
