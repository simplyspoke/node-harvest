var TaskAssignment;

module.exports = TaskAssignment = function (api) {
    this.api = api;
    this.client = api.client;
};

TaskAssignment.prototype.listByProject = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments';
    this.client.get(url, {}, cb);
};

TaskAssignment.prototype.get = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments/' + options.id;
    this.client.get(url, {}, cb);
};

TaskAssignment.prototype.assign = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments';

    delete options.project_id;
    this.client.post(url, options, cb);
};

TaskAssignment.prototype.create = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments';

    delete options.project_id;
    this.client.post(url, options, cb);
};

TaskAssignment.prototype.update = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments/' + options.id;

    delete options.project_id;
    delete options.id;
    this.client.put(url, options, cb);
};

TaskAssignment.prototype.remove = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/task_assignments/' + options.id;
    this.client.delete(url, {}, cb);
};
