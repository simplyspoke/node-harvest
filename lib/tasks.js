'use strict';

const has = require('lodash/has');

function Tasks(api) {
  this.api = api;
  this.client = api.client;
}

Tasks.prototype.list = function(options, cb) {
  let url = '/tasks';
  this.client.get(url, {}, cb);
};

Tasks.prototype.get = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('getting a task requires an id'));
  }

  let url = '/tasks/' + options.id;
  this.client.get(url, {}, cb);
};

Tasks.prototype.create = function(options, cb) {
  let url = '/tasks';
  this.client.post(url, options, cb);
};

Tasks.prototype.update = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('updating a task requires an id'));
  }

  let url = '/tasks/' + options.id;
  this.client.put(url, options, cb);
};

Tasks.prototype.activate = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('activating a task requires an id'));
  }

  let url = '/tasks/' + options.id + '/activate';
  this.client.get(url, {}, cb);
};

Tasks.prototype.delete = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('deleting a task requires an id'));
  }

  let url = '/tasks/' + options.id;
  this.client.delete(url, {}, cb);
};

module.exports = Tasks;
