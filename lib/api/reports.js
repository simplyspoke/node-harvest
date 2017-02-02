'use strict';

const helpers = require('../helpers');

function Reports(harvest) {
  this.harvest = harvest;
  this.request = harvest.request;
}

Reports.prototype.timeEntriesByProject = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'from', 'to'])) {
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
  let uri = '/projects/' + options.project_id + '/entries?from=' + options.from + '&to=' + options.to + filters;
  this.request('GET', uri, {}, cb);
};

Reports.prototype.timeEntriesByCurrentUser = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'from', 'to', 'user_id'])) {
    return cb(new Error('getting time entries by project for the current user \
      requires an id for the project.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let uri = '/projects/' + options.project_id + '/entries?from=' + options.from + '&to=' + options.to + '&user_id=' + options.user_id;
  this.request('GET', uri, {}, cb);
};

Reports.prototype.timeEntriesByUser = function(options, cb) {
  if (!helpers.has(options, ['user_id', 'from', 'to'])) {
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

  let uri = '/people/' + options.user_id + '/entries?from=' + options.from + '&to=' + options.to + filters;
  this.request('GET', uri, {}, cb);
};

Reports.prototype.expensesByUser = function(options, cb) {
  if (!helpers.has(options, ['user_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by user requires an id \
      for the user.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let uri = '/people/' + options.user_id + '/expenses?from=' + options.from + '&to=' + options.to;
  this.request('GET', uri, {}, cb);
};

Reports.prototype.expensesByProject = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by project requires an id \
      for the project.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let uri = '/projects/' + options.project_id + '/expenses?from=' + options.from + '&to=' + options.to;
  this.request('GET', uri, {}, cb);
};

Reports.prototype.expensesByClient = function(options, cb) {
  if (!helpers.has(options, ['client_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by client requires an id \
      for the client.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let uri = '/clients/' + options.request_id + '/expenses?from=' + options.from + '&to=' + options.to;
  this.request('GET', uri, {}, cb);
};

module.exports = Reports;
