'use strict';

const mixins = require('../mixins');

function People(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

People.prototype.list = function(options, cb) {
  let url = '/people';
  this.harvest.client('GET', url, {}, cb);
};

People.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('getting a person requires an id'));
  }

  let url = '/people/' + options.id;
  this.harvest.client('GET', url, {}, cb);
};

People.prototype.create = function(options, cb) {
  let url = '/people';

  this.harvest.client('POST', url, options, cb);
};

People.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating a person requires an id'));
  }

  let url = '/people/' + options.id;
  this.harvest.client('PUT', url, {}, cb);
};

People.prototype.toggle = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('toggling a person requires an id'));
  }

  let url = '/people/' + options.id + '/toggle';
  this.harvest.client('POST', url, {}, cb);
};

People.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting a person requires an id'));
  }

  let url = '/people/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

People.prototype.reset = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('reseting a persons password requires an id'));
  }

  let url = '/people/' + options.id + '/reset_password';
  this.harvest.client('POST', url, {}, cb);
};

module.exports = People;
