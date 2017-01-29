'use strict';

const has = require('lodash/has');

function Projects(api) {
  this.api = api;
  this.client = api.client;
}

Projects.prototype.list = function(options, cb) {
  let url = '/projects';
  this.client.get(url, {}, cb);
};

Projects.prototype.get = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('getting a project requires an id'));
  }

  let url = '/projects/' + options.id;
  this.client.get(url, {}, cb);
};

Projects.prototype.create = function(options, cb) {
  let url = '/projects';
  this.client.post(url, options, cb);
};

Projects.prototype.update = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('updating a project requires an id'));
  }

  let url = '/projects/' + options.id;
  delete options.id;
  this.client.put(url, options, cb);
};

Projects.prototype.toggleActivation = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('toggling activation on a project requires an id'));
  }

  let url = '/projects/' + options.id + '/toggle';
  this.client.put(url, {}, cb);
};

Projects.prototype.delete = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('deleting a project requires an id'));
  }

  let url = '/projects/' + options.id;
  this.client.delete(url, {}, cb);
};

Projects.prototype.entries = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('getting project entries requires an id'));
  }
  if (has(options, 'from')) {
    return cb(new Error('getting project entries requires a from date'));
  }
  if (has(options, 'to')) {
    return cb(new Error('getting project entries requires a to date'));
  }

  let url = '/projects/' + options.id + '/entries?from=' + options.from + '&to=' + options.to;
  this.client.get(url, {}, cb);
};

module.exports = Projects;
