'use strict';

const helpers = require('../helpers');

function Tasks(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

Tasks.prototype.list = function(options, cb) {
  let uri = '/tasks';
  this.harvest.request('GET', uri, {}, cb);
};

Tasks.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting a task requires an id'));
  }

  let uri = '/tasks/' + options.id;
  this.harvest.request('GET', uri, {}, cb);
};

Tasks.prototype.create = function(options, cb) {
  let uri = '/tasks';
  this.harvest.request('POST', uri, options, cb);
};

Tasks.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a task requires an id'));
  }

  let uri = '/tasks/' + options.id;
  this.harvest.request('PUT', uri, options, cb);
};

Tasks.prototype.activate = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('activating a task requires an id'));
  }

  let uri = '/tasks/' + options.id + '/activate';
  this.harvest.request('GET', uri, {}, cb);
};

Tasks.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting a task requires an id'));
  }

  let uri = '/tasks/' + options.id;
  this.harvest.request('DELETE', uri, {}, cb);
};

module.exports = Tasks;
