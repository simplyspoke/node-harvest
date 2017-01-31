'use strict';

function Account(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

Account.prototype.get = function(options, cb) {
  const url = '/account/who_am_i';
  return this.harvest.client('GET', url, {}, cb);
};

Account.prototype.rate_limit_status = function(options, cb) {
  const url = '/account/rate_limit_status';
  return this.harvest.client('GET', url, {}, cb);
};

module.exports = Account;
