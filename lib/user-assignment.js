var UserAssignment;

module.exports = UserAssignment = function (api) {
    this.api = api;
    this.client = api.client;
};

UserAssignment.prototype.listByProject = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/user_assignments';
    this.client.get(url, {}, cb);
};

UserAssignment.prototype.get = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/user_assignments/' + options.id;
    this.client.get(url, {}, cb);
};

UserAssignment.prototype.assign = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/user_assignments';

    delete options.id;
    this.client.post(url, options, cb);

};

UserAssignment.prototype.update = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/user_assignments/' + options.id;

    delete options.id;
    this.client.get(url, options, cb);
};

UserAssignment.prototype.remove = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/user_assignments/' + options.id;
    this.client.delete(url, {}, cb);
};
