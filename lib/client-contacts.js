'use strict';

const has = require('lodash/has');

function ClientContacts(api) {
  this.api = api;
  this.client = api.client;
}

ClientContacts.prototype.list = function(options, cb) {
  let url = '/contacts';
  this.client(url, 'GET', {}, cb);
};

ClientContacts.prototype.listByClient = function(options, cb) {
  if (!has(options, 'client_id')) {
    return cb(new Error('retrieving a contacts by client requires a client_id'));
  }

  let url = '/clients/' + options.client_id + '/contacts';
  this.client(url, 'GET', {}, cb);
};

ClientContacts.prototype.get = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('retrieving contacts requires an id'));
  }

  let url = '/contacts/' + options.id;
  this.client(url, 'GET', {}, cb);
};

ClientContacts.prototype.create = function(options, cb) {
  let url = '/contacts';
  this.client(url, 'POST', options, cb);
};

ClientContacts.prototype.update = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('updating contacts requires an id'));
  }

  let url = '/contacts/' + options.id;
  delete options.id;
  this.client(url, 'PUT', options, cb);
};

ClientContacts.prototype.delete = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('deleting contacts requires an id'));
  }

  let url = '/contacts/' + options.id;
  this.client(url, 'DELETE', {}, cb);
};

module.exports = ClientContacts;
