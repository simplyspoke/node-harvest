var InvoiceCategories;

module.exports = InvoiceCategories = function(api) {
    this.api = api;
    this.client = api.client;
};

InvoiceCategories.prototype.list = function(options, cb) {

    var url = '/invoice_item_categories';

    this.client.get(url, {}, cb);

};

InvoiceCategories.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO
    var category = '<invoice-item-category>' +
	    '<name>Entertainment</name>' +
	    '</invoice-item-category>';

    var url = '/invoice_item_categories/' + options.id;

    this.client.put(url, category, cb);

};

InvoiceCategories.prototype.create = function(options, cb) {

    // TODO
    var category = '<invoice-item-category>' +
	    '<name>Entertainment</name>' +
	    '</invoice-item-category>';

    var url = '/invoice_item_categories';

    this.client.post(url, category, cb);

};

InvoiceCategories.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoice_item_categories/' + options.id;

    this.client.delete(url, {}, cb);

};
