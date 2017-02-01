'use strict';

const helpers = require('../helpers');

function Clients(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

Clients.prototype.list = function(options, cb) {
  let url = '/clients';
  this.harvest.client('GET', url, {}, cb);
};

Clients.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('retrieving a single client requires an id'));
  }

  let url = '/clients/' + options.id;
  this.harvest.client('GET', url, {}, cb);
};

Clients.prototype.create = function(options, cb) {
  let url = '/clients';
  this.harvest.client('POST', url, options, cb);
};

Clients.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a client requires an id'));
  }

  let url = '/clients/' + options.id;
  delete options.id;
  this.harvest.client('PUT', url, options, cb);
};

Clients.prototype.toggleActivation = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling client activation requires an id'));
  }

  let url = '/clients/' + options.id + '/toggle';
  this.harvest.client('POST', url, {}, cb);
};

Clients.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting clients requires an id'));
  }

  let url = '/clients/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

module.exports = Clients;
