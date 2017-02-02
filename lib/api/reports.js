'use strict';

const helpers = require('../helpers');

function Reports(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

Reports.prototype.timeEntriesByUser = function(options, cb) {
  if (!helpers.has(options, ['user_id', 'from', 'to'])) {
    return cb(new Error('getting time entries by user requires an id \
      for the user.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let uri = '/people/' + options.user_id + '/entries';
  delete options.user_id;

  this.harvest.request('GET', uri, options, cb);
};

Reports.prototype.expensesByUser = function(options, cb) {
  if (!helpers.has(options, ['user_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by user requires an id \
      for the user.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let uri = '/people/' + options.user_id + '/expenses';
  delete options.user_id;

  this.harvest.request('GET', uri, options, cb);
};

Reports.prototype.timeEntriesByProject = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'from', 'to'])) {
    return cb(new Error('getting time entries by project requires an id \
      for the project. It also requires UTC dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let uri = '/projects/' + options.project_id + '/entries';
  delete options.project_id;

  this.harvest.request('GET', uri, options, cb);
};

Reports.prototype.expensesByProject = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by project requires an id \
      for the project.  It also requires dates (e.g. YYYYMMDD) \
      for both the from date and the to date'));
  }

  let uri = '/projects/' + options.project_id + '/expenses';
  delete options.project_id;

  this.harvest.request('GET', uri, options, cb);
};

module.exports = Reports;
