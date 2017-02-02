'use strict';

function Account(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

Account.prototype.get = function get(options, cb) {
  const uri = '/account/who_am_i';

  this.harvest.request('GET', uri, {}, cb);
};

Account.prototype.rate_limit_status = function rate_limit_status(options, cb) {
  const uri = '/account/rate_limit_status';

  this.harvest.request('GET', uri, {}, cb);
};

module.exports = Account;
