'use strict';

const mixins = require('../mixins');

function ClientContacts(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

ClientContacts.prototype.list = function(options, cb) {
  let url = '/contacts';
  this.harvest.client('GET', url, {}, cb);
};

ClientContacts.prototype.listByClient = function(options, cb) {
  if (!mixins.has(options, ['client_id'])) {
    return cb(new Error('retrieving a contacts by client requires a client_id'));
  }

  let url = '/clients/' + options.client_id + '/contacts';
  this.harvest.client('GET', url, {}, cb);
};

ClientContacts.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('retrieving contacts requires an id'));
  }

  let url = '/contacts/' + options.id;
  this.harvest.client('GET', url, {}, cb);
};

ClientContacts.prototype.create = function(options, cb) {
  let url = '/contacts';
  this.harvest.client('POST', url, options, cb);
};

ClientContacts.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating contacts requires an id'));
  }

  let url = '/contacts/' + options.id;
  delete options.id;
  this.harvest.client('PUT', url, options, cb);
};

ClientContacts.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting contacts requires an id'));
  }

  let url = '/contacts/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

module.exports = ClientContacts;
