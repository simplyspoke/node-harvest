var TaskAssignment, _isUndefined = require('../mixin');

module.exports = TaskAssignment = function (api) {
    this.api = api;
    this.client = api.client;
};

TaskAssignment.prototype.listByProject = function (options, cb) {
    if (_isUndefined(options, 'project_id')) {
        return cb(new Error('getting all task assignments by project requires an id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments';
    this.client.get(url, {}, cb);
};

TaskAssignment.prototype.get = function (options, cb) {
    if (_isUndefined(options, 'project_id', 'id')) {
        return cb(new Error('getting a task assignment by project requires an id for both the project and task'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments/' + options.id;
    this.client.get(url, {}, cb);
};

TaskAssignment.prototype.assign = function (options, cb) {
    if (_isUndefined(options, 'project_id')) {
        return cb(new Error('assigning a task assignment requires an id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments';

    delete options.project_id;
    this.client.post(url, options, cb);
};

TaskAssignment.prototype.create = function (options, cb) {
    if (_isUndefined(options, 'project_id')) {
        return cb(new Error('creating a task assignment requires an id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments';

    delete options.project_id;
    this.client.post(url, options, cb);
};

TaskAssignment.prototype.update = function (options, cb) {
    if (_isUndefined(options, 'project_id', 'id')) {
        return cb(new Error('updating a task assignment requires an id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments/' + options.id;

    delete options.project_id;
    delete options.id;
    this.client.put(url, options, cb);
};

TaskAssignment.prototype.remove = function (options, cb) {
    if (_isUndefined(options, 'project_id', 'id')) {
        return cb(new Error('removing a task assignment requires an id for both the project and task'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments/' + options.id;
    this.client.delete(url, {}, cb);
};
