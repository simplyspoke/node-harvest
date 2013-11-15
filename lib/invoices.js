var Invoices;

module.exports = Invoices = function (api) {
    this.api = api;
    this.client = api.client;
};

Invoices.prototype.list = function (options, cb) {
    var url = '/invoices';
    this.client.get(url, {}, cb);
};

Invoices.prototype.get = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.id;
    this.client.get(url, {}, cb);
};

Invoices.prototype.create = function (options, cb) {
    var url = '/invoices',
        invoice = {
            "invoice": options
        };

    delete invoice.invoice.id;
    this.client.post(url, invoice, cb);

};

Invoices.prototype.update = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.id,
        invoice = {
            "invoice": options
        };

    delete invoice.invoice.id;
    this.client.put(url, invoice, cb);
};

Invoices.prototype.delete = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.id;
    this.client.delete(url, {}, cb);
};
