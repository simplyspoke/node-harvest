var ClientContacts, _isUndefined = require('../mixin');

module.exports = ClientContacts = function (api) {
    this.api = api;
    this.client = api.client;
};

ClientContacts.prototype.list = function (options, cb) {
    var url = '/contacts';
    this.client.get(url, {}, cb);
};

ClientContacts.prototype.listByClient = function (options, cb) {
    if (_isUndefined(options, 'client_id')) {
        return cb(new Error('retrieving a contacts by client requires a client_id'));
    }

    var url = '/clients/' + options.client_id + '/contacts';
    this.client.get(url, {}, cb);
};

ClientContacts.prototype.get = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('retrieving contacts requires an id'));
    }

    var url = '/contacts/' + options.id;
    this.client.get(url, {}, cb);
};

ClientContacts.prototype.create = function (options, cb) {
    var url = '/contacts';
    this.client.post(url, options, cb);
};

ClientContacts.prototype.update = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('updating contacts requires an id'));
    }

    var url = '/contacts/' + options.id;
    delete options.id;
    this.client.put(url, options, cb);
};

ClientContacts.prototype.delete = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('deleting contacts requires an id'));
    }

    var url = '/contacts/' + options.id;
    this.client.delete(url, {}, cb);
};
