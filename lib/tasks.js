'use strict';

const mixins = require('../mixins');

function Tasks(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

Tasks.prototype.list = function(options, cb) {
  let url = '/tasks';
  this.harvest.client('GET', url, {}, cb);
};

Tasks.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('getting a task requires an id'));
  }

  let url = '/tasks/' + options.id;
  this.harvest.client('GET', url, {}, cb);
};

Tasks.prototype.create = function(options, cb) {
  let url = '/tasks';
  this.harvest.client('POST', url, options, cb);
};

Tasks.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating a task requires an id'));
  }

  let url = '/tasks/' + options.id;
  this.harvest.client('PUT', url, options, cb);
};

Tasks.prototype.activate = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('activating a task requires an id'));
  }

  let url = '/tasks/' + options.id + '/activate';
  this.harvest.client('GET', url, {}, cb);
};

Tasks.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting a task requires an id'));
  }

  let url = '/tasks/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

module.exports = Tasks;
