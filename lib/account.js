'use strict';

var Account = function(api) {
  this.api = api;
  this.client = api.client;
};

Account.prototype.get = function(options, cb) {
  var url = '/account/who_am_i';
  this.client.get(url, {}, cb);
};

Account.prototype.rate_limit_status = function(options, cb) {
  var url = '/account/rate_limit_status';
  this.client.get(url, {}, cb);
};

module.exports = Account;
