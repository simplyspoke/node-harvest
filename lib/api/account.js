'use strict';

/**
 * [Account description]
 * @param {[type]} harvest [description]
 */
function Account(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

/**
 * [get description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
Account.prototype.get = function get(cb) {
  const uri = '/account/who_am_i';

  this.harvest.request('GET', uri, {}, cb);
};

/**
 * [rate_limit_status description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
Account.prototype.rate_limit_status = function rate_limit_status(cb) {
  const uri = '/account/rate_limit_status';

  this.harvest.request('GET', uri, {}, cb);
};

module.exports = Account;
