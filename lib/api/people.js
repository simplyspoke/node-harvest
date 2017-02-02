'use strict';

const helpers = require('../helpers');

function People(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

People.prototype.list = function(options, cb) {
  let uri = '/people';
  this.harvest.request('GET', uri, {}, cb);
};

People.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting a person requires an id'));
  }

  let uri = '/people/' + options.id;
  this.harvest.request('GET', uri, {}, cb);
};

People.prototype.create = function(options, cb) {
  let uri = '/people';

  this.harvest.request('POST', uri, options, cb);
};

People.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a person requires an id'));
  }

  let uri = '/people/' + options.id;
  this.harvest.request('PUT', uri, {}, cb);
};

People.prototype.toggle = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling a person requires an id'));
  }

  let uri = '/people/' + options.id + '/toggle';
  this.harvest.request('POST', uri, {}, cb);
};

People.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting a person requires an id'));
  }

  let uri = '/people/' + options.id;
  this.harvest.request('DELETE', uri, {}, cb);
};

People.prototype.reset = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('reseting a persons password requires an id'));
  }

  let uri = '/people/' + options.id + '/reset_password';
  this.harvest.request('POST', uri, {}, cb);
};

module.exports = People;
