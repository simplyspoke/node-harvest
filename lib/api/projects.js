'use strict';

const helpers = require('../helpers');

function Projects(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

Projects.prototype.list = function(options, cb) {
  let uri = '/projects';
  this.harvest.request('GET', uri, {}, cb);
};

Projects.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting a project requires an id'));
  }

  let uri = '/projects/' + options.id;
  this.harvest.request('GET', uri, {}, cb);
};

Projects.prototype.create = function(options, cb) {
  let uri = '/projects';
  this.harvest.request('POST', uri, options, cb);
};

Projects.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a project requires an id'));
  }

  let uri = '/projects/' + options.id;
  delete options.id;
  this.harvest.request('PUT', uri, options, cb);
};

Projects.prototype.toggleActivation = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling activation on a project requires an id'));
  }

  let uri = '/projects/' + options.id + '/toggle';
  this.harvest.request('PUT', uri, {}, cb);
};

Projects.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting a project requires an id'));
  }

  let uri = '/projects/' + options.id;
  this.harvest.request('DELETE', uri, {}, cb);
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

  let uri = '/projects/' + options.id + '/entries?from=' + options.from + '&to=' + options.to;
  this.harvest.request('GET', uri, {}, cb);
};

module.exports = Projects;
