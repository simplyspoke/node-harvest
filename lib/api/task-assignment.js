'use strict';

const helpers = require('../helpers');

function TaskAssignment(harvest) {
  this.harvest = harvest;
  this.request = harvest.request;
}

TaskAssignment.prototype.listByProject = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('getting all task assignments by project requires an id'));
  }

  let uri = '/projects/' + options.project_id + '/task_assignments';
  this.request('GET', uri, {}, cb);
};

TaskAssignment.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'id'])) {
    return cb(new Error('getting a task assignment by project requires an id for both the project and task'));
  }

  let uri = '/projects/' + options.project_id + '/task_assignments/' + options.id;
  this.request('GET', uri, {}, cb);
};

TaskAssignment.prototype.assign = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('assigning a task assignment requires an id'));
  }

  let uri = '/projects/' + options.project_id + '/task_assignments';

  delete options.project_id;
  this.request('POST', uri, options, cb);
};

TaskAssignment.prototype.create = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('creating a task assignment requires an id'));
  }

  let uri = '/projects/' + options.project_id + '/task_assignments';

  delete options.project_id;
  this.request('POST', uri, options, cb);
};

TaskAssignment.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'id'])) {
    return cb(new Error('updating a task assignment requires an id'));
  }

  let uri = '/projects/' + options.project_id + '/task_assignments/' + options.id;

  delete options.project_id;
  delete options.id;
  this.request('PUT', uri, options, cb);
};

TaskAssignment.prototype.remove = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'id'])) {
    return cb(new Error('removing a task assignment requires an id for both the project and task'));
  }

  let uri = '/projects/' + options.project_id + '/task_assignments/' + options.id;
  this.request('DELETE', uri, {}, cb);
};

module.exports = TaskAssignment;
