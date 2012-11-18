var InvoicePayments;

module.exports = InvoicePayments = function(api) {
    this.api = api;
    this.client = api.client;
};

InvoicePayments.prototype.paymentsByInvoice = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};

InvoicePayments.prototype.getByInvoice = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};

InvoicePayments.prototype.create = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};

InvoicePayments.prototype.delete = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};
