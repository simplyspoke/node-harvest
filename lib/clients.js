'use strict';

var isUndefined = require('../mixins').isUndefined;

var Clients = function(api) {
  this.api = api;
  this.client = api.client;
};

Clients.prototype.list = function(options, cb) {
  var url = '/clients';
  this.client.get(url, {}, cb);
};

Clients.prototype.get = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('retrieving a single client requires an id'));
  }

  var url = '/clients/' + options.id;
  this.client.get(url, {}, cb);
};

Clients.prototype.create = function(options, cb) {
  var url = '/clients';
  this.client.post(url, options, cb);
};

Clients.prototype.update = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('updating a client requires an id'));
  }

  var url = '/clients/' + options.id;
  delete options.id;
  this.client.put(url, options, cb);
};

Clients.prototype.toggleActivation = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('toggling client activation requires an id'));
  }

  var url = '/clients/' + options.id + '/toggle';
  this.client.post(url, {}, cb);
};

Clients.prototype.delete = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('deleting clients requires an id'));
  }

  var url = '/clients/' + options.id;
  this.client.delete(url, {}, cb);
};

module.exports = Clients;
