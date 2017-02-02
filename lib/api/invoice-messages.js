'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const helpers = require('../helpers');
const apiChildBase = require('../mixins/api-child-base');

/**
 * [InvoiceMessages description]
 * @param {[type]} harvest [description]
 */
function InvoiceMessages(harvest) {
  this.harvest = harvest;

  this.parentName = 'invoices';
  this.parentKey = 'invoiceId';
  this.name = 'messages';
}

assign(InvoiceMessages.prototype, pick(apiChildBase, ['list', 'get', 'delete']));


InvoiceMessages.prototype.send = function(invoiceId, options, cb) {
  if (!invoiceId) {
    return cb(new Error(`sending a message requires a ${this.parentName} id`));
  }

  let uri = '/invoices/' + invoiceId + '/messages';

  this.harvest.request('POST', uri, options, cb);
};

/**
 * [markSent description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
InvoiceMessages.prototype.markSent = function(invoiceId, cb) {
  if (!invoiceId) {
    return cb(new Error('marking an invoice message as sent requires an id'));
  }

  let uri = '/invoices/' + invoiceId + '/messages/mark_as_sent';

  this.harvest.request('POST', uri, {}, cb);
};

/**
 * [markDraft description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
InvoiceMessages.prototype.markDraft = function(invoiceId, cb) {
  if (!invoiceId) {
    return cb(new Error('marking an invoice message as draft requires an id'));
  }

  let uri = '/invoices/' + invoiceId + '/messages/mark_as_draft';

  this.harvest.request('POST', uri, {}, cb);
};

/**
 * [markClosed description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
InvoiceMessages.prototype.markClosed = function(invoiceId, cb) {
  if (!invoiceId) {
    return cb(new Error('marking an invoice message as closed requires an id'));
  }

  let uri = '/invoices/' + invoiceId + '/messages/mark_as_closed';

  this.harvest.request('POST', uri, {}, cb);
};

/**
 * [markOpen description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
InvoiceMessages.prototype.markOpen = function(invoiceId, cb) {
  if (!invoiceId) {
    return cb(new Error('marking an invoice message as open requires an id'));
  }

  let uri = '/invoices/' + invoiceId + '/messages/re_open';

  this.harvest.request('POST', uri, {}, cb);
};

module.exports = InvoiceMessages;
