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

    var url = '/projects/' + options.project_id + '/user_assignments',
        user_assignment = {
            "user": options
        };

    delete user_assignment.user.id;
    this.client.post(url, user_assignment, cb);

};

UserAssignment.prototype.update = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/user_assignments/' + options.id,
        user_assignment = {
            "user-assignment": options
        };

    delete user_assignment.user.id;
    this.client.get(url, user_assignment, cb);
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
