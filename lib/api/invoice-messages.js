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
InvoiceMessages.prototype.mark = function(invoiceId, status, cb) {
  if (!invoiceId) {
    return cb(new Error('marking an invoice message as sent requires an id'));
  }
  if (!status) {
    return cb(new Error('marking an invoice message as sent requires an status'));
  }

  const statuses = {
    sent: 'mark_as_sent',
    draft: 'mark_as_draft',
    closed: 'mark_as_closed',
    open: 're_open'
  }

  let uri = '/invoices/' + invoiceId + '/messages/' + statuses[status];

  this.harvest.request('POST', uri, {}, cb);
};

module.exports = InvoiceMessages;
