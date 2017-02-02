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

/**
 * [toggle description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
ExpenseCategories.prototype.toggle = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling an expense catageory requires an id'));
  }

  let uri = this.baseUri + options.id + '/toggle';

  this.harvest.request('POST', uri, {}, cb);
};

module.exports = ExpenseCategories;
