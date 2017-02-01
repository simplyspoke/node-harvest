'use strict';

const helpers = require('../helpers');

function TaskAssignment(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

TaskAssignment.prototype.listByProject = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('getting all task assignments by project requires an id'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments';
  this.harvest.client('GET', url, {}, cb);
};

TaskAssignment.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'id'])) {
    return cb(new Error('getting a task assignment by project requires an id for both the project and task'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments/' + options.id;
  this.harvest.client('GET', url, {}, cb);
};

TaskAssignment.prototype.assign = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('assigning a task assignment requires an id'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments';

  delete options.project_id;
  this.harvest.client('POST', url, options, cb);
};

TaskAssignment.prototype.create = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('creating a task assignment requires an id'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments';

  delete options.project_id;
  this.harvest.client('POST', url, options, cb);
};

TaskAssignment.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'id'])) {
    return cb(new Error('updating a task assignment requires an id'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments/' + options.id;

  delete options.project_id;
  delete options.id;
  this.harvest.client('PUT', url, options, cb);
};

TaskAssignment.prototype.remove = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'id'])) {
    return cb(new Error('removing a task assignment requires an id for both the project and task'));
  }

  let url = '/projects/' + options.project_id + '/task_assignments/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

module.exports = TaskAssignment;
