'use strict';

const helpers = require('../helpers');

function UserAssignment(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

UserAssignment.prototype.listByProject = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('getting all user assignments by project requires an id'));
  }

  let uri = '/projects/' + options.project_id + '/user_assignments';
  this.harvest.request('GET', uri, {}, cb);
};

UserAssignment.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'id'])) {
    return cb(new Error('getting a user assignment requires an id for both the project and assignment'));
  }

  let uri = '/projects/' + options.project_id + '/user_assignments/' + options.id;
  this.harvest.request('GET', uri, {}, cb);
};

UserAssignment.prototype.assign = function(options, cb) {
  if (!helpers.has(options, ['project_id'])) {
    return cb(new Error('assigning a user assignment requires a project id'));
  }

  let uri = '/projects/' + options.project_id + '/user_assignments';

  delete options.project_id;

  this.harvest.request('POST', uri, options, cb);
};

UserAssignment.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'id'])) {
    return cb(new Error('updating a user assignment requires an id for both the project and assignment'));
  }

  let uri = '/projects/' + options.project_id + '/user_assignments/' + options.id;

  delete options.id;
  delete options.project_id;

  this.harvest.request('PUT', uri, options, cb);
};

UserAssignment.prototype.remove = function(options, cb) {
  if (!helpers.has(options, ['project_id', 'id'])) {
    return cb(new Error('removing a user assignment requires an id for both the project and assignment'));
  }

  let uri = '/projects/' + options.project_id + '/user_assignments/' + options.id;

  this.harvest.request('DELETE', uri, {}, cb);
};

module.exports = UserAssignment;
