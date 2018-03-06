'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const helpers = require('../helpers');
const apiChildBase = require('../mixins/api-child-base');

/**
 * [TaskAssignment description]
 * @param {[type]} harvest [description]
 */
function TaskAssignment(harvest) {
  this.harvest = harvest;

  this.parentName = 'projects';
  this.parentKey = 'project_id';
  this.name = 'task_assignments';
}

assign(TaskAssignment.prototype, pick(apiChildBase, ['list', 'get', 'update', 'delete']));

/**
 * [assign description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
TaskAssignment.prototype.assign = function(project_id, options, cb) {
  if (!project_id) {
    return cb(new Error('assigning a task assignment requires an id'));
  }

  let uri = '/projects/' + project_id + '/task_assignments';

  this.harvest.request('POST', uri, options, cb);
};

/**
 * [assign description]
 * @param  {[type]}   project_id [description]
 * @param  {[type]}   options    [description]
 * @param  {Function} cb         [description]
 * @return {[type]}              [description]
 */
TaskAssignment.prototype.create = function(project_id, options, cb) {
  if (!project_id) {
    return cb(new Error('assigning a task assignment requires an id'));
  }

  let uri = '/projects/' + project_id + '/task_assignments/add_with_create_new_task';

  this.harvest.request('POST', uri, options, cb);
};

module.exports = TaskAssignment;
