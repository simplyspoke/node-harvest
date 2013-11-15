var Clients;

module.exports = Clients = function (api) {
    this.api = api;
    this.client = api.client;
};

Clients.prototype.list = function (options, cb) {
    var url = '/clients';
    this.client.get(url, {}, cb);
};

Clients.prototype.get = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/clients/' + options.id;
    this.client.get(url, {}, cb);
};

Clients.prototype.create = function (options, cb) {
    var url = '/clients',
        client = {
            "client": options
        };

    this.client.get(url, client, cb);
};

Clients.prototype.update = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('updating an entry requires an entry id'));
    }

    var url = '/clients/' + options.id,
        client = {
            "client": options
        };

    delete client.client.id;
    this.client.get(url, client, cb);
};

Clients.prototype.toggleActivation = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('updating an entry requires an entry id'));
    }

    var url = '/clients/' + options.id + '/toggle';
    this.client.post(url, {}, cb);
};

Clients.prototype.delete = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('updating an entry requires an entry id'));
    }

    var url = '/clients/' + options.id;
    this.client.delete(url, {}, cb);
};
