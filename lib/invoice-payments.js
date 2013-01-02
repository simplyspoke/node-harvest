var InvoicePayments;
var encode = require('./util/string').encodeHTML;

module.exports = InvoicePayments = function(api) {
    this.api = api;
    this.client = api.client;
};

InvoicePayments.prototype.paymentsByInvoice = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.invoice_id + '/payments';

    this.client.get(url, {}, cb);

};

InvoicePayments.prototype.getByInvoice = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.invoice_id + '/payments/' + options.id;

    this.client.get(url, {}, cb);

};

InvoicePayments.prototype.create = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.payment_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var payment = '<payment>';
    if (typeof options.paid_at !== "undefined")
	payment += '<paid-at type="datetime">' + encode(options.paid_at) + '</paid-at>';
    if (typeof options.amount !== "undefined")
	payment += '<amount type="decimal">' + encode(options.amount) + '</amount>';
    if (typeof options.notes !== "undefined")
	payment += '<notes>' + options.notes + '</notes>';
    payment += '</payment>';

    var url = '/invoices/' + options.invoice_id + '/payments/' + options.payment_id;

    this.client.post(url, payment, cb);

};

InvoicePayments.prototype.delete = function(options, cb) {

    if (typeof options.invoice_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.invoice_id + '/payments/' + options.id;

    this.client.delete(url, {}, cb);

};
