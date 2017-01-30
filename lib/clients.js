'use strict';

const mixins = require('../mixins');

function Clients(api) {
  this.api = api;
  this.client = api.client;
}

Clients.prototype.list = function(options, cb) {
  let url = '/clients';
  this.client(url, 'GET', {}, cb);
};

Clients.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('retrieving a single client requires an id'));
  }

  let url = '/clients/' + options.id;
  this.client(url, 'GET', {}, cb);
};

Clients.prototype.create = function(options, cb) {
  let url = '/clients';
  this.client(url, 'POST', options, cb);
};

Clients.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating a client requires an id'));
  }

  let url = '/clients/' + options.id;
  delete options.id;
  this.client(url, 'PUT', options, cb);
};

Clients.prototype.toggleActivation = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('toggling client activation requires an id'));
  }

  let url = '/clients/' + options.id + '/toggle';
  this.client(url, 'POST', {}, cb);
};

Clients.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting clients requires an id'));
  }

  let url = '/clients/' + options.id;
  this.client(url, 'DELETE', {}, cb);
};

module.exports = Clients;
