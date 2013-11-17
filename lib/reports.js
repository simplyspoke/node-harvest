var Reports;

module.exports = Reports = function (api) {
    this.api = api;
    this.client = api.client;
};

Reports.prototype.timeEntriesByProject = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.from === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.to === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/entries?from=' + options.from + '&to=' + options.to;
    this.client.get(url, {}, cb);
};

Reports.prototype.timeEntriesByCurrentUser = function (options, cb) {
    if (options.project_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.user_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.from === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.to === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/entries?from=' + options.from + '&to=' + options.to + '&user_id=' + options.user_id;
    this.client.get(url, {}, cb);
};

Reports.prototype.timeEntriesByUser = function (options, cb) {
    if (options.user_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.from === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.to === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/people/' + options.user_id + '/entries?from=' + options.from + '&to=' + options.to;
    this.client.get(url, {}, cb);
};

Reports.prototype.expensesByUser = function (options, cb) {
    if (options.user_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.from === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.to === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/people/' + options.user_id + '/expenses?from=' + options.from + '&to=' + options.to;
    this.client.get(url, {}, cb);
};

Reports.prototype.expensesByProject = function (options, cb) {
    if (options.user_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.from === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.to === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/projects/' + options.project_id + '/expenses?from=' + options.from + '&to=' + options.to;
    this.client.get(url, {}, cb);
};
