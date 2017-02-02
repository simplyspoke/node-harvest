'use strict';

const assign = require('lodash/assign');

const apiBase = require('../mixins/api-base');

function InvoiceCategories(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'invoice item category';
  this.baseUri = '/invoice_item_categories/';
}

assign(InvoiceCategories.prototype, apiBase);

module.exports = InvoiceCategories;
