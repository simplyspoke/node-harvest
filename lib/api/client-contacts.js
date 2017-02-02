'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

function ClientContacts(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'contacts';
  this.baseUri = `/${this.name}/`;
}

assign(ClientContacts.prototype, apiBase);

ClientContacts.prototype.listByClient = function(options, cb) {
  if (!helpers.has(options, ['client_id'])) {
    return cb(new Error('retrieving a contacts by client requires a client_id'));
  }

  let uri = this.baseUri + options.request_id + '/contacts';

  this.harvest.request('GET', uri, {}, cb);
};

module.exports = ClientContacts;
