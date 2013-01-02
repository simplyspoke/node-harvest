var InvoiceCategories;
var encode = require('./util/string').encodeHTML;

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

    var category = '<invoice-item-category>';
    if (typeof options.name !== "undefined")
	category += '<name>' + encode(options.name) + '</name>';
    category += '</invoice-item-category>';

    var url = '/invoice_item_categories/' + options.id;

    this.client.put(url, category, cb);

};

InvoiceCategories.prototype.create = function(options, cb) {

    var category = '<invoice-item-category>';
    if (typeof options.name !== "undefined")
	category += '<name>' + encode(options.name) + '</name>';
    category += '</invoice-item-category>';

    var url = '/invoice_item_categories';

    this.client.post(url, category, cb);

};

InvoiceCategories.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoice_item_categories/' + options.id;

    this.client.delete(url, {}, cb);

};
