'use strict';

const helpers = require('../helpers');

function Projects(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

Projects.prototype.list = function(options, cb) {
  let url = '/projects';
  this.harvest.client('GET', url, {}, cb);
};

Projects.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting a project requires an id'));
  }

  let url = '/projects/' + options.id;
  this.harvest.client('GET', url, {}, cb);
};

Projects.prototype.create = function(options, cb) {
  let url = '/projects';
  this.harvest.client('POST', url, options, cb);
};

Projects.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a project requires an id'));
  }

  let url = '/projects/' + options.id;
  delete options.id;
  this.harvest.client('PUT', url, options, cb);
};

Projects.prototype.toggleActivation = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling activation on a project requires an id'));
  }

  let url = '/projects/' + options.id + '/toggle';
  this.harvest.client('PUT', url, {}, cb);
};

Projects.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting a project requires an id'));
  }

  let url = '/projects/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

Projects.prototype.entries = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting project entries requires an id'));
  }
  if (!helpers.has(options, ['from'])) {
    return cb(new Error('getting project entries requires a from date'));
  }
  if (!helpers.has(options, ['to'])) {
    return cb(new Error('getting project entries requires a to date'));
  }

  let url = '/projects/' + options.id + '/entries?from=' + options.from + '&to=' + options.to;
  this.harvest.client('GET', url, {}, cb);
};

module.exports = Projects;
