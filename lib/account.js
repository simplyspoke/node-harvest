'use strict';

const assign = require('lodash/assign');
const baseChild = require('../mixins/baseChild');

function Account(harvest) {
  this.harvest = harvest;
}

assign(Account.prototype, baseChild);

Account.prototype.get = function(options, cb) {
  const url = '/account/who_am_i';
  return this.harvest.client('GET', url, {}, cb);
};

Account.prototype.rate_limit_status = function(options, cb) {
  const url = '/account/rate_limit_status';
  return this.harvest.client('GET', url, {}, cb);
};

console.log(Account);

module.exports = Account;
