'use strict';

const mixins = require('../mixins');

function Projects(api) {
  this.api = api;
  this.client = api.client;
}

Projects.prototype.list = function(options, cb) {
  let url = '/projects';
  this.client(url, 'GET', {}, cb);
};

Projects.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('getting a project requires an id'));
  }

  let url = '/projects/' + options.id;
  this.client(url, 'GET', {}, cb);
};

Projects.prototype.create = function(options, cb) {
  let url = '/projects';
  this.client(url, 'POST', options, cb);
};

Projects.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating a project requires an id'));
  }

  let url = '/projects/' + options.id;
  delete options.id;
  this.client(url, 'PUT', options, cb);
};

Projects.prototype.toggleActivation = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('toggling activation on a project requires an id'));
  }

  let url = '/projects/' + options.id + '/toggle';
  this.client(url, 'PUT', {}, cb);
};

Projects.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting a project requires an id'));
  }

  let url = '/projects/' + options.id;
  this.client(url, 'DELETE', {}, cb);
};

Projects.prototype.entries = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('getting project entries requires an id'));
  }
  if (!mixins.has(options, ['from'])) {
    return cb(new Error('getting project entries requires a from date'));
  }
  if (!mixins.has(options, ['to'])) {
    return cb(new Error('getting project entries requires a to date'));
  }

  let url = '/projects/' + options.id + '/entries?from=' + options.from + '&to=' + options.to;
  this.client(url, 'GET', {}, cb);
};

module.exports = Projects;
