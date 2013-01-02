var InvoiceMessages;
var encode = require('./util/string').encodeHTML;
var encode = require('./util/string').encodeHTML;

module.exports = InvoiceMessages = function(api) {
    this.api = api;
    this.client = api.client;
};

InvoiceMessages.prototype.messagesByInvoice = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.invoice_id + '/messages';

    this.client.get(url, {}, cb);

};

InvoiceMessages.prototype.getByInvoice = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.invoice_id + '/messages/' + options.id;

    this.client.get(url, {}, cb);

};

InvoiceMessages.prototype.create = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var invoice_message = '<invoice-message>';
    if (typeof options.body !== "undefined")
	invoice_message += '<body>' + encode(options.body) + '</body>';
    if (typeof options.recipients !== "undefined")
	invoice_message += '<recipients>' + encode(options.recipients) + '</recipients>';
    if (typeof options.attach_pdf !== "undefined")
	invoice_message += '<attach-pdf type="boolean">' + encode(options.attach_pdf) + '</attach-pdf>';
    if (typeof options.send_me_a_copy !== "undefined")
	invoice_message += '<send-me-a-copy type="boolean">' + encode(options.send_me_a_copy) + '</send-me-a-copy>';
    invoice_message += '</invoice-message>';

    var url = '/invoices/' + options.invoice_id + '/messages';

    this.client.post(url, invoice_message, cb);

};

InvoiceMessages.prototype.delete = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.invoice_id + '/messages/' + options.id;

    this.client.delete(url, {}, cb);

};

InvoiceMessages.prototype.markSent = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var invoice_message = '<invoice-message>';
    if (typeof options.body !== "undefined")
	invoice_message += '<body>' + encode(options.body) + '</body>';
    invoice_message += '</invoice-message>';

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_sent';

    this.client.post(url, invoice_message, cb);

};

InvoiceMessages.prototype.markClosed = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var invoice_message = '<invoice-message>';
    if (typeof options.body !== "undefined")
	invoice_message += '<body>' + encode(options.body) + '</body>';
    invoice_message += '</invoice-message>';

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_closed';

    this.client.post(url, invoice_message, cb);

};

InvoiceMessages.prototype.markOpen = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var invoice_message = '<invoice-message>';
    if (typeof options.body !== "undefined")
	invoice_message += '<body>' + encode(options.body) + '</body>';
    invoice_message += '</invoice-message>';

    var url = '/invoices/' + options.invoice_id + '/messages/re_open';

    this.client.post(url, invoice_message, cb);

};

InvoiceMessages.prototype.markDraft = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_draft';

    this.client.post(url, {}, cb);

};
