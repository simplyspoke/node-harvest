'use strict';

const helpers = require('../helpers');

/**
 * [Reports description]
 * @param {[type]} harvest [description]
 */
function Reports(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

Reports.prototype.timeEntriesByProject = function(id, options, cb) {
  if (!helpers.has(options, ['from', 'to']) && id) {
    return cb(new Error('getting time entries by project requires a project_id, from, and to dates.'));
  }

  let uri = `/projects/${id}/entries`;

  this.harvest.request('GET', uri, options, cb);
};

/**
 * [timeEntriesByUser description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
Reports.prototype.timeEntriesByUser = function(id, options, cb) {
  if (!helpers.has(options, ['from', 'to']) && id) {
    return cb(new Error('getting time entries by user requires a user_id, from, and to dates.'));
  }

  let uri = `/people/${id}/entries`;

  this.harvest.request('GET', uri, options, cb);
};

Reports.prototype.expensesByUser = function(id, options, cb) {
  if (!helpers.has(options, ['from', 'to']) && id) {
    return cb(new Error('getting expenses by user requires a user_id, from, and to dates.'));
  }

  let uri = `/people/${id}/expenses`;

  this.harvest.request('GET', uri, options, cb);
};

Reports.prototype.expensesByProject = function(id, options, cb) {
  if (!helpers.has(options, ['from', 'to']) && id) {
    return cb(new Error('getting expenses by project requires a user_id, from, and to dates.'));
  }

  let uri = `/projects/${id}/expenses`;

  this.harvest.request('GET', uri, options, cb);
};

module.exports = Reports;
