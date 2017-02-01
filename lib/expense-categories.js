'use strict';

const helpers = require('../helpers');

function ExpenseCategories(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

ExpenseCategories.prototype.list = function(options, cb) {
  let url = '/expense_categories';
  this.harvest.client('GET', url, {}, cb);
};

ExpenseCategories.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('retrieving an expense catageory requires an id'));
  }

  let url = '/expense_categories/' + options.id;
  this.harvest.client('GET', url, {}, cb);
};

ExpenseCategories.prototype.create = function(options, cb) {
  let url = '/expense_categories';
  this.harvest.client('POST', url, options, cb);
};

ExpenseCategories.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating an expense catageory requires an id'));
  }

  let url = '/expense_categories/' + options.id;
  this.harvest.client('PUT', url, {}, cb);

};

ExpenseCategories.prototype.toggle = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling an expense catageory requires an id'));
  }

  let url = '/expense_categories/' + options.id + '/toggle';
  this.harvest.client('POST', url, {}, cb);
};

ExpenseCategories.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting an expense catageory requires an id'));
  }

  let url = '/expense_categories/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

module.exports = ExpenseCategories;
