'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const helpers = require('../helpers');
const apiChildBase = require('../mixins/api-child-base');

function InvoiceMessages(harvest) {
  this.harvest = harvest;

  this.parentName = 'invoices';
  this.parentKey = 'invoice_id';
  this.name = 'messages';
}

assign(InvoiceMessages.prototype, pick(apiChildBase, ['list', 'get', 'create', 'delete']));

InvoiceMessages.prototype.markSent = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('marking an invoice message as sent requires an id'));
  }

  let uri = '/invoices/' + options.invoice_id + '/messages/mark_as_sent';
  delete options.invoice_id;

  this.harvest.request('POST', uri, options, cb);
};

InvoiceMessages.prototype.markDraft = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('marking an invoice message as draft requires an id'));
  }

  let uri = '/invoices/' + options.invoice_id + '/messages/mark_as_draft';

  this.harvest.request('POST', uri, {}, cb);
};

InvoiceMessages.prototype.markClosed = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('marking an invoice message as closed requires an id'));
  }

  let uri = '/invoices/' + options.invoice_id + '/messages/mark_as_closed';
  delete options.invoice_id;

  this.harvest.request('POST', uri, options, cb);
};

InvoiceMessages.prototype.markOpen = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('marking an invoice message as open requires an id'));
  }

  let uri = '/invoices/' + options.invoice_id + '/messages/re_open';
  delete options.invoice_id;

  this.harvest.request('POST', uri, options, cb);
};

module.exports = InvoiceMessages;
