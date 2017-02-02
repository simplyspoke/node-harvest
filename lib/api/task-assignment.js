'use strict';

const assign = require('lodash/assign');

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

assign(TaskAssignment.prototype, apiChildBase);

/**
 * [assign description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
TaskAssignment.prototype.assign = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('assigning a task assignment requires an id'));
  }

  let uri = '/projects/' + options.project_id + '/task_assignments';
  delete options.project_id;

  this.harvest.request('POST', uri, options, cb);
};

module.exports = TaskAssignment;
