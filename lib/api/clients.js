'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

/**
 * [Clients description]
 * @param {[type]} harvest [description]
 */
function Clients(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'clients';
  this.baseUri = `/${this.name}/`;
}

assign(Clients.prototype, apiBase);

/**
 * [toggleActivation description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
Clients.prototype.toggle = function(id, cb) {
  if (!id) {
    return cb(new Error('toggling client activation requires an id'));
  }

  let uri = '/clients/' + id + '/toggle';

  this.harvest.request('POST', uri, {}, cb);
};

module.exports = Clients;
