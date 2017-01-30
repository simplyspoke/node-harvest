'use strict';

const mixins = require('../mixins');

function Reports(api) {
  this.api = api;
  this.client = api.client;
}

Reports.prototype.timeEntriesByProject = function(options, cb) {
  if (!mixins.has(options, ['project_id', 'from', 'to'])) {
    return cb(new Error('getting time entries by project requires an id \
      for the project. It also requires UTC dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }
  let filters = '';

  if (options.billable === true || options.billable === 'yes') {
    filters += '&billable=yes';
  }

  if (options.only_billed === true || options.only_billed === 'yes') {
    filters += '&only_billed=yes';
  }

  if (options.only_unbilled === true || options.only_unbilled === 'yes') {
    filters += '&only_unbilled=yes';
  }

  if (options.is_closed === true || options.is_closed === 'yes') {
    filters += '&is_closed=yes';
  }

  if (options.updated_since) {
    filters += '&updated_since=' + options.updated_since;
  }

  if (options.user_id) {
    filters += '&user_id=' + options.user_id;
  }
  let url = '/projects/' + options.project_id + '/entries?from=' + options.from + '&to=' + options.to + filters;
  this.client(url, 'GET', {}, cb);
};

Reports.prototype.timeEntriesByCurrentUser = function(options, cb) {
  if (!mixins.has(options, ['project_id', 'from', 'to', 'user_id'])) {
    return cb(new Error('getting time entries by project for the current user \
      requires an id for the project.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let url = '/projects/' + options.project_id + '/entries?from=' + options.from + '&to=' + options.to + '&user_id=' + options.user_id;
  this.client(url, 'GET', {}, cb);
};

Reports.prototype.timeEntriesByUser = function(options, cb) {
  if (!mixins.has(options, ['user_id', 'from', 'to'])) {
    return cb(new Error('getting time entries by user requires an id \
      for the user.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let filters = '';

  if (options.billable === true || options.billable === 'yes') {
    filters += '&billable=yes';
  }

  if (options.billable === false || options.billable === 'no') {
    filters += '&billable=no';
  }

  if (options.only_billed === true || options.only_billed === 'yes') {
    filters += '&only_billed=yes';
  }

  if (options.only_unbilled === true || options.only_unbilled === 'yes') {
    filters += '&only_unbilled=yes';
  }

  if (options.is_closed === true || options.is_closed === 'yes') {
    filters += '&is_closed=yes';
  }

  if (options.updated_since) {
    filters += '&updated_since=' + options.updated_since;
  }

  if (options.project_id) {
    filters += '&project_id=' + options.project_id;
  }

  let url = '/people/' + options.user_id + '/entries?from=' + options.from + '&to=' + options.to + filters;
  this.client(url, 'GET', {}, cb);
};

Reports.prototype.expensesByUser = function(options, cb) {
  if (!mixins.has(options, ['user_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by user requires an id \
      for the user.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let url = '/people/' + options.user_id + '/expenses?from=' + options.from + '&to=' + options.to;
  this.client(url, 'GET', {}, cb);
};

Reports.prototype.expensesByProject = function(options, cb) {
  if (!mixins.has(options, ['project_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by project requires an id \
      for the project.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let url = '/projects/' + options.project_id + '/expenses?from=' + options.from + '&to=' + options.to;
  this.client(url, 'GET', {}, cb);
};

Reports.prototype.expensesByClient = function(options, cb) {
  if (!mixins.has(options, ['client_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by client requires an id \
      for the client.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let url = '/clients/' + options.client_id + '/expenses?from=' + options.from + '&to=' + options.to;
  this.client(url, 'GET', {}, cb);
};

module.exports = Reports;
