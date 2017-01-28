'use strict';

var isUndefined = require('../mixins').isUndefined;

var UserAssignment = function(api) {
  this.api = api;
  this.client = api.client;
};

UserAssignment.prototype.listByProject = function(options, cb) {
  if (isUndefined(options, 'project_id')) {
    return cb(new Error('getting all user assignments by project requires an id'));
  }

  var url = '/projects/' + options.project_id + '/user_assignments';
  this.client.get(url, {}, cb);
};

UserAssignment.prototype.get = function(options, cb) {
  if (isUndefined(options, 'project_id', 'id')) {
    return cb(new Error('getting a user assignment requires an id for both the project and assignment'));
  }

  var url = '/projects/' + options.project_id + '/user_assignments/' + options.id;
  this.client.get(url, {}, cb);
};

UserAssignment.prototype.assign = function(options, cb) {
  if (isUndefined(options, 'project_id')) {
    return cb(new Error('assigning a user assignment requires a project id'));
  }

  var url = '/projects/' + options.project_id + '/user_assignments';

  delete options.project_id;
  this.client.post(url, options, cb);

};

UserAssignment.prototype.update = function(options, cb) {
  if (isUndefined(options, 'project_id', 'id')) {
    return cb(new Error('updating a user assignment requires an id for both the project and assignment'));
  }

  var url = '/projects/' + options.project_id + '/user_assignments/' + options.id;

  delete options.id;
  delete options.project_id;

  this.client.put(url, options, cb);
};

UserAssignment.prototype.remove = function(options, cb) {
  if (isUndefined(options, 'project_id', 'id')) {
    return cb(new Error('removing a user assignment requires an id for both the project and assignment'));
  }

  var url = '/projects/' + options.project_id + '/user_assignments/' + options.id;
  this.client.delete(url, {}, cb);
};

module.exports = UserAssignment;
