'use strict';

function Account(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

Account.prototype.get = function(options, cb) {
  let url = '/account/who_am_i';
  this.harvest.client('GET', url, {}, cb);
};

Account.prototype.rate_limit_status = function(options, cb) {
  let url = '/account/rate_limit_status';
  this.harvest.client('GET', url, {}, cb);
};

module.exports = Account;
