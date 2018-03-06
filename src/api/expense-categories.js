'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

/**
 * [ExpenseCategories description]
 * @param {[type]} harvest [description]
 */
function ExpenseCategories(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'expense category';
  this.baseUri = '/expense_categories/';
}

assign(ExpenseCategories.prototype, apiBase);

module.exports = ExpenseCategories;
