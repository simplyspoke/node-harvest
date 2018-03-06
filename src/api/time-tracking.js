'use strict';

const helpers = require('../helpers');

/**
 * [TimeTracking description]
 * @param {[type]} harvest [description]
 */
function TimeTracking(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

// NOTE: Consider updating to list to follow CRUD conventions more closely.
/**
 * [daily description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
TimeTracking.prototype.daily = function(options, cb) {
  let uri = '/daily';

  if (options.date) {
    uri += helpers.dayOfYear(options.date);
    delete options.date;
  }

  this.harvest.request('GET', uri, options, cb);
};

/**
 * [get description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
TimeTracking.prototype.get = function(id, cb) {
  if (!id) {
    return cb(new Error('getting daily time requires an id'));
  }

  let uri = `/daily/show/${id}`;

  this.harvest.request('GET', uri, {}, cb);
};

/**
 * [create description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
TimeTracking.prototype.create = function(options, cb) {
  let uri = '/daily/add';

  this.harvest.request('POST', uri, options, cb);
};

/**
 * [update description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
TimeTracking.prototype.update = function(id, options, cb) {
  if (!id) {
    return cb(new Error('updating time requires an id'));
  }

  let uri = `/daily/update/${id}`;

  this.harvest.request('POST', uri, options, cb);
};

/**
 * [delete description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
TimeTracking.prototype.delete = function(id, cb) {
  if (!id) {
    return cb(new Error('deleting time requires an id'));
  }

  let uri = `/daily/delete/${id}`;

  this.harvest.request('DELETE', uri, {}, cb);
};

/**
 * [toggleTimer description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
TimeTracking.prototype.toggleTimer = function(id, cb) {
  if (!id) {
    return cb(new Error('toggling the timer requires an id'));
  }

  let uri = `/daily/timer/${id}`;

  this.harvest.request('GET', uri, {}, cb);
};

module.exports = TimeTracking;
