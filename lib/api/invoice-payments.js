'use strict';

const helpers = require('../helpers');

function InvoicePayments(harvest) {
  this.harvest = harvest;
  this.request = harvest.request;
}

InvoicePayments.prototype.paymentsByInvoice = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('getting all payments by invoice requires an id'));
  }

  let uri = '/invoices/' + options.invoice_id + '/payments';
  this.request('GET', uri, {}, cb);
};

InvoicePayments.prototype.getByInvoice = function(options, cb) {
  if (!helpers.has(options, ['invoice_id', 'id'])) {
    return cb(new Error('getting a payment by invoice requires an id for both invoice and payments'));
  }

  let uri = '/invoices/' + options.invoice_id + '/payments/' + options.id;
  this.request('GET', uri, {}, cb);
};

InvoicePayments.prototype.create = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('creating an invoice payment requires an id'));
  }

  let uri = '/invoices/' + options.invoice_id + '/payments';

  delete options.invoice_id;
  this.request('POST', uri, options, cb);
};

InvoicePayments.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('deleting an invoice payment requires an id for both the invoice and payment'));
  }

  let uri = '/invoices/' + options.invoice_id + '/payments/' + options.id;
  this.request('DELETE', uri, {}, cb);
};

module.exports = InvoicePayments;
