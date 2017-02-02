'use strict';

const helpers = require('../helpers');

function Reports(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

Reports.prototype.timeEntriesByUser = function(options, cb) {
  if (!helpers.has(options, ['user_id', 'from', 'to'])) {
    return cb(new Error('getting time entries by user requires a user_id, from, and to dates.'));
  }

  let uri = `/people/${options.user_id}/entries`;
  delete options.user_id;

  this.harvest.request('GET', uri, options, cb);
};

Reports.prototype.expensesByUser = function(options, cb) {
  if (!helpers.has(options, ['user_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by user requires a user_id, from, and to dates.'));
  }

  let uri = `/people/${options.user_id}/expenses`;
  delete options.user_id;

  this.harvest.request('GET', uri, options, cb);
};

Reports.prototype.timeEntriesByProject = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'from', 'to'])) {
    return cb(new Error('getting time entries by project requires a user_id, from, and to dates.'));
  }

  let uri = `/projects/${options.project_id}/entries`;
  delete options.project_id;

  this.harvest.request('GET', uri, options, cb);
};

Reports.prototype.expensesByProject = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'from', 'to'])) {
    return cb(new Error('getting expenses by project requires a user_id, from, and to dates.'));
  }

  let uri = `/projects/${options.project_id}/expenses`;
  delete options.project_id;

  this.harvest.request('GET', uri, options, cb);
};

module.exports = Reports;
