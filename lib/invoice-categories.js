var InvoiceCategories;

module.exports = InvoiceCategories = function (api) {
    this.api = api;
    this.client = api.client;
};

InvoiceCategories.prototype.list = function (options, cb) {
    var url = '/invoice_item_categories';
    this.client.get(url, {}, cb);
};

InvoiceCategories.prototype.create = function (options, cb) {
    var url = '/invoice_item_categories',
        category = {
            "invoice-item-category": options
        };

    this.client.post(url, category, cb);
};

InvoiceCategories.prototype.update = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoice_item_categories/' + options.id,
        category = {
            "invoice-item-category": options
        };

    delete category["invoice-item-category"].id;
    this.client.put(url, category, cb);
};

InvoiceCategories.prototype.delete = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/invoice_item_categories/' + options.id;
    this.client.delete(url, {}, cb);
};
