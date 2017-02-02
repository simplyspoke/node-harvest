'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const helpers = require('../helpers');
const apiChildBase = require('../mixins/api-child-base');

function UserAssignment(harvest) {
  this.harvest = harvest;

  this.parentName = 'projects';
  this.parentKey = 'project_id';
  this.name = 'user_assignments';
}

assign(UserAssignment.prototype, pick(apiChildBase, ['list', 'get', 'update', 'delete']));

UserAssignment.prototype.assign = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('assigning a user assignment requires a project id'));
  }

  let uri = '/projects/' + options.project_id + '/user_assignments';
  delete options.project_id;

  this.harvest.request('POST', uri, options, cb);
};

module.exports = UserAssignment;
