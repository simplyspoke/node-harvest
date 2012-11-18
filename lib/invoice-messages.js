var InvoiceMessages;

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

    // TODO
    var invoice_message = '<invoice-message>' +
	    '<body>Message body</body>' +
	    '<recipients>support@harvestapp.com, help@getharvest.com</recipients>' +
	    '<attach-pdf type="boolean">true</attach-pdf>' +
	    '<send-me-a-copy type="boolean">true</send-me-a-copy>' +
	    '</invoice-message>';

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

    // TODO
    var invoice_message = '<invoice-message>' +
	    '<body>Optional message body goes here</body>' +
	    '</invoice-message>';

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_sent';

    this.client.post(url, invoice_message, cb);

};

InvoiceMessages.prototype.markClosed = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO
    var invoice_message = '<invoice-message>' +
	    '<body>Optional message body goes here</body>' +
	    '</invoice-message>';

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_closed';

    this.client.post(url, invoice_message, cb);

};

InvoiceMessages.prototype.markOpen = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO
    var invoice_message = '<invoice-message>' +
	    '<body>Optional message body goes here</body>' +
	    '</invoice-message>';

    var url = '/invoices/' + options.invoice_id + '/messages/re_open';

    this.client.post(url, invoice_message, cb);

};

InvoiceMessages.prototype.markDraft = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.invoice_id + '/messages/mark_as_draft';

    this.client.post(url, {}, cb);

};
