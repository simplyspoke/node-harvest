'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

function Clients(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'clients';
  this.baseUri = `/${this.name}/`;
}

assign(Clients.prototype, apiBase);

Clients.prototype.toggleActivation = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling client activation requires an id'));
  }

  let uri = '/clients/' + options.id + '/toggle';

  this.harvest.request('POST', uri, {}, cb);
};

module.exports = Clients;
