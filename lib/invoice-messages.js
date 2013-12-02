var InvoiceMessages;

module.exports = InvoiceMessages = function (api) {
    this.api = api;
    this.client = api.client;
};

InvoiceMessages.prototype.messagesByInvoice = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages';
    this.client.get(url, {}, cb);
};

InvoiceMessages.prototype.getByInvoice = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/' + options.id;
    this.client.get(url, {}, cb);
};

InvoiceMessages.prototype.create = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages';
    this.client.post(url, options, cb);
};

InvoiceMessages.prototype.delete = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/' + options.id;
    this.client.delete(url, {}, cb);
};

InvoiceMessages.prototype.markSent = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_sent';
    delete options.invoice_id;
    this.client.post(url, options, cb);
};

InvoiceMessages.prototype.markClosed = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_closed';
    delete options.invoice_id;
    this.client.post(url, options, cb);
};

InvoiceMessages.prototype.markOpen = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/re_open';

    delete options.invoice_id;
    this.client.post(url, options, cb);

};

InvoiceMessages.prototype.markDraft = function (options, cb) {
    if (options.invoice_id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_draft';
    this.client.post(url, {}, cb);
};
