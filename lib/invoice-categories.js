'use strict';

const mixins = require('../mixins');

function InvoiceCategories(api) {
  this.api = api;
  this.client = api.client;
}

InvoiceCategories.prototype.list = function(options, cb) {
  let url = '/invoice_item_categories';
  this.client(url, 'GET', {}, cb);
};

InvoiceCategories.prototype.create = function(options, cb) {
  let url = '/invoice_item_categories';
  this.client(url, 'POST', options, cb);
};

InvoiceCategories.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating a single invoice category requires an id'));
  }

  let url = '/invoice_item_categories/' + options.id;
  delete options.id;
  this.client(url, 'PUT', options, cb);
};

InvoiceCategories.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting a single invoice category requires an id'));
  }

  let url = '/invoice_item_categories/' + options.id;
  this.client(url, 'DELETE', {}, cb);
};

module.exports = InvoiceCategories;
