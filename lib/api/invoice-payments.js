'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const helpers = require('../helpers');
const apiChildBase = require('../mixins/api-child-base');

/**
 * [InvoicePayments description]
 * @param {[type]} harvest [description]
 */
function InvoicePayments(harvest) {
  this.harvest = harvest;

  this.parentName = 'invoices';
  this.parentKey = 'invoice_id';
  this.name = 'payments';
}

assign(InvoicePayments.prototype, pick(apiChildBase, ['list', 'get', 'create', 'delete']));

module.exports = InvoicePayments;
