'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const helpers = require('../helpers');
const apiChildBase = require('../mixins/api-child-base');

/**
 * [UserAssignment description]
 * @param {[type]} harvest [description]
 */
function UserAssignment(harvest) {
  this.harvest = harvest;

  this.parentName = 'projects';
  this.parentKey = 'project_id';
  this.name = 'user_assignments';
}

assign(UserAssignment.prototype, pick(apiChildBase, ['list', 'get', 'update', 'delete']));

/**
 * [assign description]
 * @param  {[type]}   projectId [description]
 * @param  {[type]}   options   [description]
 * @param  {Function} cb        [description]
 * @return {[type]}             [description]
 */
UserAssignment.prototype.assign = function(projectId, options, cb) {
  if (!projectId) {
    return cb(new Error('assigning a user assignment requires a project id'));
  }

  let uri = '/projects/' + projectId + '/user_assignments';

  this.harvest.request('POST', uri, options, cb);
};

module.exports = UserAssignment;
