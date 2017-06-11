'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

/**
 * [People description]
 * @param {[type]} harvest [description]
 */
function Users(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'people';
  this.baseUri = `/${this.name}/`;
}

assign(Users.prototype, apiBase);

/**
 * [toggle description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
Users.prototype.toggle = function(id, cb) {
  if (!id) {
    return cb(new Error('toggling a user requires an id'));
  }

  let uri = this.baseUri + id + '/toggle';

  this.harvest.request('POST', uri, {}, cb);
};

module.exports = Users;
