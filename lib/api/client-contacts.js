'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

/**
 * [ClientContacts description]
 * @param {[type]} harvest [description]
 */
function ClientContacts(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'contacts';
  this.baseUri = `/${this.name}/`;
}

assign(ClientContacts.prototype, apiBase);

/**
 * [listByClient description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
ClientContacts.prototype.listByClient = function(options, cb) {
  if (!helpers.has(options, ['client_id'])) {
    return cb(new Error('retrieving a contacts by client requires a client_id'));
  }

  let uri = this.baseUri + options.request_id + '/contacts';

  this.harvest.request('GET', uri, {}, cb);
};

module.exports = ClientContacts;
