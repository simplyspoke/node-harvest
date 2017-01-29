'use strict';

const has = require('lodash/has');

function InvoicePayments(api) {
  this.api = api;
  this.client = api.client;
}

InvoicePayments.prototype.paymentsByInvoice = function(options, cb) {
  if (has(options, 'invoice_id')) {
    return cb(new Error('getting all payments by invoice requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/payments';
  this.client.get(url, {}, cb);
};

InvoicePayments.prototype.getByInvoice = function(options, cb) {
  if (has(options, ['invoice_id', 'id'])) {
    return cb(new Error('getting a payment by invoice requires an id for both invoice and payments'));
  }

  let url = '/invoices/' + options.invoice_id + '/payments/' + options.id;
  this.client.get(url, {}, cb);
};

InvoicePayments.prototype.create = function(options, cb) {
  if (has(options, 'invoice_id')) {
    return cb(new Error('creating an invoice payment requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/payments';

  delete options.invoice_id;
  this.client.post(url, options, cb);
};

InvoicePayments.prototype.delete = function(options, cb) {
  if (has(options, 'invoice_id')) {
    return cb(new Error('deleting an invoice payment requires an id for both the invoice and payment'));
  }

  let url = '/invoices/' + options.invoice_id + '/payments/' + options.id;
  this.client.delete(url, {}, cb);
};

module.exports = InvoicePayments;
