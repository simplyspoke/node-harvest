'use strict';

const mixins = require('../mixins');

function People(api) {
  this.api = api;
  this.client = api.client;
}

People.prototype.list = function(options, cb) {
  let url = '/people';
  this.client(url, 'GET', {}, cb);
};

People.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('getting a person requires an id'));
  }

  let url = '/people/' + options.id;
  this.client(url, 'GET', {}, cb);
};

People.prototype.create = function(options, cb) {
  let url = '/people';

  this.client(url, 'POST', options, cb);
};

People.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating a person requires an id'));
  }

  let url = '/people/' + options.id;
  this.client(url, 'PUT', {}, cb);
};

People.prototype.toggle = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('toggling a person requires an id'));
  }

  let url = '/people/' + options.id + '/toggle';
  this.client(url, 'POST', {}, cb);
};

People.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting a person requires an id'));
  }

  let url = '/people/' + options.id;
  this.client(url, 'DELETE', {}, cb);
};

People.prototype.reset = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('reseting a persons password requires an id'));
  }

  let url = '/people/' + options.id + '/reset_password';
  this.client(url, 'POST', {}, cb);
};

module.exports = People;
