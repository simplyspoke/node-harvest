var People, _isUndefined = require('../mixin');

module.exports = People = function (api) {
    this.api = api;
    this.client = api.client;
};

People.prototype.list = function (options, cb) {
    var url = '/people';
    this.client.get(url, {}, cb);
};

People.prototype.get = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('getting a person requires an id'));
    }

    var url = '/people/' + options.id;
    this.client.get(url, {}, cb);
};

People.prototype.create = function (options, cb) {
    var url = '/people';

    this.client.post(url, options, cb);
};

People.prototype.update = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('updating a person requires an id'));
    }

    var url = '/people/' + options.id;
    this.client.put(url, {}, cb);
};

People.prototype.toggle = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('toggling a person requires an id'));
    }

    var url = '/people/' + options.id + '/toggle';
    this.client.post(url, {}, cb);
};

People.prototype.delete = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('deleting a person requires an id'));
    }

    var url = '/people/' + options.id;
    this.client.delete(url, {}, cb);
};

People.prototype.reset = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('reseting a persons password requires an id'));
    }

    var url = '/people/' + options.id + '/reset_password';
    this.client.post(url, {}, cb);
};
