var Invoices, _isUndefined = require('../mixin');

module.exports = Invoices = function (api) {
    this.api = api;
    this.client = api.client;
};

Invoices.prototype.list = function (options, cb) {
    var url = '/invoices';
    this.client.get(url, options, cb);
};

Invoices.prototype.get = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('getting an invoice requires an id'));
    }

    var url = '/invoices/' + options.id;
    this.client.get(url, {}, cb);
};

Invoices.prototype.create = function (options, cb) {
    var url = '/invoices';
    delete options.id;
    this.client.post(url, options, cb);

};

Invoices.prototype.update = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('updating an invoice requires an id'));
    }

    var url = '/invoices/' + options.id;
    delete options.id;
    this.client.put(url, options, cb);
};

Invoices.prototype.delete = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('deleting an invoice requires an id'));
    }

    var url = '/invoices/' + options.id;
    this.client.delete(url, {}, cb);
};
