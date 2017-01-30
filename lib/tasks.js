'use strict';

const has = require('lodash/has');

function Tasks(api) {
  this.api = api;
  this.client = api.client;
}

Tasks.prototype.list = function(options, cb) {
  let url = '/tasks';
  this.client(url, 'GET', {}, cb);
};

Tasks.prototype.get = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('getting a task requires an id'));
  }

  let url = '/tasks/' + options.id;
  this.client(url, 'GET', {}, cb);
};

Tasks.prototype.create = function(options, cb) {
  let url = '/tasks';
  this.client(url, 'POST', options, cb);
};

Tasks.prototype.update = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('updating a task requires an id'));
  }

  let url = '/tasks/' + options.id;
  this.client(url, 'PUT', options, cb);
};

Tasks.prototype.activate = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('activating a task requires an id'));
  }

  let url = '/tasks/' + options.id + '/activate';
  this.client(url, 'GET', {}, cb);
};

Tasks.prototype.delete = function(options, cb) {
  if (!has(options, 'id')) {
    return cb(new Error('deleting a task requires an id'));
  }

  let url = '/tasks/' + options.id;
  this.client(url, 'DELETE', {}, cb);
};

module.exports = Tasks;
