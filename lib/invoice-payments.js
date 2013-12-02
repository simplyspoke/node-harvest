var InvoicePayments;

module.exports = InvoicePayments = function (api) {
    this.api = api;
    this.client = api.client;
};

InvoicePayments.prototype.paymentsByInvoice = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/payments';
    this.client.get(url, {}, cb);
};

InvoicePayments.prototype.getByInvoice = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/payments/' + options.id;
    this.client.get(url, {}, cb);
};

InvoicePayments.prototype.create = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/payments';

    delete options.invoice_id;
    this.client.post(url, options, cb);
};

InvoicePayments.prototype.delete = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/payments/' + options.id;
    this.client.delete(url, {}, cb);
};
