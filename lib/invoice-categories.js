var InvoiceCategories, _isUndefined = require('../mixin');

module.exports = InvoiceCategories = function (api) {
    this.api = api;
    this.client = api.client;
};

InvoiceCategories.prototype.list = function (options, cb) {
    var url = '/invoice_item_categories';
    this.client.get(url, {}, cb);
};

InvoiceCategories.prototype.create = function (options, cb) {
    var url = '/invoice_item_categories';
    this.client.post(url, options, cb);
};

InvoiceCategories.prototype.update = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('updating a single invoice category requires an id'));
    }

    var url = '/invoice_item_categories/' + options.id;
    delete options.id;
    this.client.put(url, options, cb);
};

InvoiceCategories.prototype.delete = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('deleting a single invoice category requires an id'));
    }

    var url = '/invoice_item_categories/' + options.id;
    this.client.delete(url, {}, cb);
};
