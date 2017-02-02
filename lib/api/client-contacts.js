'use strict';

const helpers = require('../helpers');

function ClientContacts(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

ClientContacts.prototype.list = function(options, cb) {
  let uri = '/contacts';

  this.harvest.request('GET', uri, {}, cb);
};

ClientContacts.prototype.listByClient = function(options, cb) {
  if (!helpers.has(options, ['client_id'])) {
    return cb(new Error('retrieving a contacts by client requires a client_id'));
  }

  let uri = '/clients/' + options.request_id + '/contacts';

  this.harvest.request('GET', uri, {}, cb);
};

ClientContacts.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('retrieving contacts requires an id'));
  }

  let uri = '/contacts/' + options.id;

  this.harvest.request('GET', uri, {}, cb);
};

ClientContacts.prototype.create = function(options, cb) {
  let uri = '/contacts';

  this.harvest.request('POST', uri, options, cb);
};

ClientContacts.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating contacts requires an id'));
  }

  let uri = '/contacts/' + options.id;
  delete options.id;

  this.harvest.request('PUT', uri, options, cb);
};

ClientContacts.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting contacts requires an id'));
  }

  let uri = '/contacts/' + options.id;

  this.harvest.request('DELETE', uri, {}, cb);
};

module.exports = ClientContacts;
