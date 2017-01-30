'use strict';

function Account(api) {
  this.api = api;
  this.client = api.client;
}

Account.prototype.get = function(options, cb) {
  let url = '/account/who_am_i';
  this.client(url, 'GET', {}, cb);
};

Account.prototype.rate_limit_status = function(options, cb) {
  let url = '/account/rate_limit_status';
  this.client(url, 'GET', {}, cb);
};

module.exports = Account;
