'use strict';

const mixins = require('../mixins');

function UserAssignment(api) {
  this.api = api;
  this.client = api.client;
}

UserAssignment.prototype.listByProject = function(options, cb) {
  if (!mixins.has(options, ['project_id'])) {
    return cb(new Error('getting all user assignments by project requires an id'));
  }

  let url = '/projects/' + options.project_id + '/user_assignments';
  this.client(url, 'GET', {}, cb);
};

UserAssignment.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['project_id', 'id'])) {
    return cb(new Error('getting a user assignment requires an id for both the project and assignment'));
  }

  let url = '/projects/' + options.project_id + '/user_assignments/' + options.id;
  this.client(url, 'GET', {}, cb);
};

UserAssignment.prototype.assign = function(options, cb) {
  if (!mixins.has(options, ['project_id'])) {
    return cb(new Error('assigning a user assignment requires a project id'));
  }

  let url = '/projects/' + options.project_id + '/user_assignments';

  delete options.project_id;

  this.client(url, 'POST', options, cb);
};

UserAssignment.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['project_id', 'id'])) {
    return cb(new Error('updating a user assignment requires an id for both the project and assignment'));
  }

  let url = '/projects/' + options.project_id + '/user_assignments/' + options.id;

  delete options.id;
  delete options.project_id;

  this.client(url, 'PUT', options, cb);
};

UserAssignment.prototype.remove = function(options, cb) {
  if (!mixins.has(options, ['project_id', 'id'])) {
    return cb(new Error('removing a user assignment requires an id for both the project and assignment'));
  }

  let url = '/projects/' + options.project_id + '/user_assignments/' + options.id;

  this.client(url, 'DELETE', {}, cb);
};

module.exports = UserAssignment;
