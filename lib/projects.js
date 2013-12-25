var Projects, _isUndefined = require('../mixin');

module.exports = Projects = function (api) {
    this.api = api;
    this.client = api.client;
};

Projects.prototype.list = function (options, cb) {
    var url = '/projects';
    this.client.get(url, {}, cb);
};

Projects.prototype.get = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('getting a project requires an id'));
    }

    var url = '/projects/' + options.id;
    this.client.get(url, {}, cb);
};

Projects.prototype.create = function (options, cb) {
    var url = '/projects';
    this.client.post(url, options, cb);
};

Projects.prototype.update = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('updating a project requires an id'));
    }

    var url = '/projects/' + options.id;
    delete options.id;
    this.client.put(url, options, cb);
};

Projects.prototype.toggleActivation = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('toggling activation on a project requires an id'));
    }

    var url = '/projects/' + options.id + '/toggle';
    this.client.put(url, {}, cb);
};

Projects.prototype.delete = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('deleting a project requires an id'));
    }

    var url = '/projects/' + options.id;
    this.client.delete(url, {}, cb);
};
