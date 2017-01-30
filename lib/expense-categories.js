'use strict';

const mixins = require('../mixins');

function ExpenseCategories(api) {
  this.api = api;
  this.client = api.client;
}

ExpenseCategories.prototype.list = function(options, cb) {
  let url = '/expense_categories';
  this.client(url, 'GET', {}, cb);
};

ExpenseCategories.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('retrieving an expense catageory requires an id'));
  }

  let url = '/expense_categories/' + options.id;
  this.client(url, 'GET', {}, cb);
};

ExpenseCategories.prototype.create = function(options, cb) {
  let url = '/expense_categories';
  this.client(url, 'POST', options, cb);
};

ExpenseCategories.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating an expense catageory requires an id'));
  }

  let url = '/expense_categories/' + options.id;
  this.client(url, 'PUT', {}, cb);

};

ExpenseCategories.prototype.toggle = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('toggling an expense catageory requires an id'));
  }

  let url = '/expense_categories/' + options.id + '/toggle';
  this.client(url, 'POST', {}, cb);
};

ExpenseCategories.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting an expense catageory requires an id'));
  }

  let url = '/expense_categories/' + options.id;
  this.client(url, 'DELETE', {}, cb);
};

module.exports = ExpenseCategories;
