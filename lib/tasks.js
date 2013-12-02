var Tasks;

module.exports = Tasks = function (api) {
    this.api = api;
    this.client = api.client;
};

Tasks.prototype.list = function (options, cb) {
    var url = '/tasks';
    this.client.get(url, {}, cb);
};

Tasks.prototype.get = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/tasks/' + options.id;
    this.client.get(url, {}, cb);
};

Tasks.prototype.create = function (options, cb) {
    var url = '/tasks';
    this.client.post(url, options, cb);
};

Tasks.prototype.update = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/tasks/' + options.id;
    this.client.put(url, options, cb);
};

Tasks.prototype.activate = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/tasks/' + options.id + '/activate';
    this.client.get(url, {}, cb);
};

Tasks.prototype.delete = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/tasks/' + options.id;
    this.client.delete(url, {}, cb);
};
