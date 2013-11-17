var ExpenseCategories;

module.exports = ExpenseCategories = function (api) {
    this.api = api;
    this.client = api.client;
};

ExpenseCategories.prototype.list = function (options, cb) {
    var url = '/expense_categories';
    this.client.get(url, {}, cb);
};

ExpenseCategories.prototype.get = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/expense_categories/' + options.id;
    this.client.get(url, {}, cb);
};

ExpenseCategories.prototype.create = function (options, cb) {
    var url = '/expense_categories',
        category = {
            "expense-category": options
        };

    this.client.post(url, category, cb);
};

ExpenseCategories.prototype.update = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/expense_categories/' + options.id,
        category = {
            "expense-category": options
        };

    delete category["expense-category"].id;
    this.client.put(url, {}, cb);

};

ExpenseCategories.prototype.toggle = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/expense_categories/' + options.id + '/toggle';
    this.client.post(url, {}, cb);
};

ExpenseCategories.prototype.delete = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/expense_categories/' + options.id;
    this.client.delete(url, {}, cb);
};
