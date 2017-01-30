'use strict';

const mixins = require('../mixins');

function TaskAssignment(api) {
  this.api = api;
  this.client = api.client;
}

TaskAssignment.prototype.listByProject = function(options, cb) {
  if (!mixins.has(options, ['project_id'])) {
    return cb(new Error('getting all task assignments by project requires an id'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments';
  this.client(url, 'GET', {}, cb);
};

TaskAssignment.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['project_id', 'id'])) {
    return cb(new Error('getting a task assignment by project requires an id for both the project and task'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments/' + options.id;
  this.client(url, 'GET', {}, cb);
};

TaskAssignment.prototype.assign = function(options, cb) {
  if (!mixins.has(options, ['project_id'])) {
    return cb(new Error('assigning a task assignment requires an id'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments';

  delete options.project_id;
  this.client(url, 'POST', options, cb);
};

TaskAssignment.prototype.create = function(options, cb) {
  if (!mixins.has(options, ['project_id'])) {
    return cb(new Error('creating a task assignment requires an id'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments';

  delete options.project_id;
  this.client(url, 'POST', options, cb);
};

TaskAssignment.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['project_id', 'id'])) {
    return cb(new Error('updating a task assignment requires an id'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments/' + options.id;

  delete options.project_id;
  delete options.id;
  this.client(url, 'PUT', options, cb);
};

TaskAssignment.prototype.remove = function(options, cb) {
  if (!mixins.has(options, ['project_id', 'id'])) {
    return cb(new Error('removing a task assignment requires an id for both the project and task'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments/' + options.id;
  this.client(url, 'DELETE', {}, cb);
};

module.exports = TaskAssignment;
