'use strict';

const helpers = require('../helpers');

function InvoicePayments(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

InvoicePayments.prototype.paymentsByInvoice = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('getting all payments by invoice requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/payments';
  this.harvest.client('GET', url, {}, cb);
};

InvoicePayments.prototype.getByInvoice = function(options, cb) {
  if (!helpers.has(options, ['invoice_id', 'id'])) {
    return cb(new Error('getting a payment by invoice requires an id for both invoice and payments'));
  }

  let url = '/invoices/' + options.invoice_id + '/payments/' + options.id;
  this.harvest.client('GET', url, {}, cb);
};

InvoicePayments.prototype.create = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('creating an invoice payment requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/payments';

  delete options.invoice_id;
  this.harvest.client('POST', url, options, cb);
};

InvoicePayments.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('deleting an invoice payment requires an id for both the invoice and payment'));
  }

  let url = '/invoices/' + options.invoice_id + '/payments/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

module.exports = InvoicePayments;
