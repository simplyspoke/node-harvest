var InvoiceMessages, _isUndefined = require('../mixin');

module.exports = InvoiceMessages = function (api) {
    this.api = api;
    this.client = api.client;
};

InvoiceMessages.prototype.messagesByInvoice = function (options, cb) {
    if (_isUndefined(options, 'invoice_id')) {
        return cb(new Error('getting all message by invoice requires an id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages';
    this.client.get(url, {}, cb);
};

InvoiceMessages.prototype.getByInvoice = function (options, cb) {
    if (_isUndefined(options, 'invoice_id', 'id')) {
        return cb(new Error('getting an invoice message requires an id for both invoice and the message'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/' + options.id;
    this.client.get(url, {}, cb);
};

InvoiceMessages.prototype.create = function (options, cb) {
    if (_isUndefined(options, 'invoice_id')) {
        return cb(new Error('creating an invoice message requires an id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages';
    this.client.post(url, options, cb);
};

InvoiceMessages.prototype.delete = function (options, cb) {
    if (_isUndefined(options, 'invoice_id', 'id')) {
        return cb(new Error('deleting an invoice message requires an id for both invoice and the message'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/' + options.id;
    this.client.delete(url, {}, cb);
};

InvoiceMessages.prototype.markSent = function (options, cb) {
    if (_isUndefined(options, 'invoice_id')) {
        return cb(new Error('marking an invoice message as sent requires an id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_sent';
    delete options.invoice_id;
    this.client.post(url, options, cb);
};

InvoiceMessages.prototype.markClosed = function (options, cb) {
    if (_isUndefined(options, 'invoice_id')) {
        return cb(new Error('marking an invoice message as closed requires an id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_closed';
    delete options.invoice_id;
    this.client.post(url, options, cb);
};

InvoiceMessages.prototype.markOpen = function (options, cb) {
    if (_isUndefined(options, 'invoice_id')) {
        return cb(new Error('marking an invoice message as open requires an id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/re_open';

    delete options.invoice_id;
    this.client.post(url, options, cb);

};

InvoiceMessages.prototype.markDraft = function (options, cb) {
    if (_isUndefined(options, 'invoice_id')) {
        return cb(new Error('marking an invoice message as draft requires an id'));
    }

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_draft';
    this.client.post(url, {}, cb);
};
