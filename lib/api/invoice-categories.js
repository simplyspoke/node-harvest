'use strict';

const helpers = require('../helpers');

function InvoiceCategories(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

InvoiceCategories.prototype.list = function(options, cb) {
  let uri = '/invoice_item_categories';
  this.harvest.request('GET', uri, {}, cb);
};

InvoiceCategories.prototype.create = function(options, cb) {
  let uri = '/invoice_item_categories';
  this.harvest.request('POST', uri, options, cb);
};

InvoiceCategories.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a single invoice category requires an id'));
  }

  let uri = '/invoice_item_categories/' + options.id;
  delete options.id;
  this.harvest.request('PUT', uri, options, cb);
};

InvoiceCategories.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting a single invoice category requires an id'));
  }

  let uri = '/invoice_item_categories/' + options.id;
  this.harvest.request('DELETE', uri, {}, cb);
};

module.exports = InvoiceCategories;
