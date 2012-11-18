var InvoicePayments;

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

    // TODO
    var payment = '<payment>' +
	    '<paid-at type="datetime">2008-02-14T00:00:00Z</paid-at>' +
	    '<amount type="decimal">52000.0</amount>' +
	    '<notes>Some optional notes go here</notes>' +
	    '</payment>';

    // TODO
    var payment_id = '1';

    var url = '/invoices/' + options.invoice_id + '/payments/' + payment_id;

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
