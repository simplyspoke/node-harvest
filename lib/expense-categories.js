var ExpenseCategories, _isUndefined = require('../mixin');

module.exports = ExpenseCategories = function (api) {
    this.api = api;
    this.client = api.client;
};

ExpenseCategories.prototype.list = function (options, cb) {
    var url = '/expense_categories';
    this.client.get(url, {}, cb);
};

ExpenseCategories.prototype.get = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('retrieving an expense catageory requires an id'));
    }

    var url = '/expense_categories/' + options.id;
    this.client.get(url, {}, cb);
};

ExpenseCategories.prototype.create = function (options, cb) {
    var url = '/expense_categories';
    this.client.post(url, options, cb);
};

ExpenseCategories.prototype.update = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('updating an expense catageory requires an id'));
    }

    var url = '/expense_categories/' + options.id;
    this.client.put(url, {}, cb);

};

ExpenseCategories.prototype.toggle = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('toggling an expense catageory requires an id'));
    }

    var url = '/expense_categories/' + options.id + '/toggle';
    this.client.post(url, {}, cb);
};

ExpenseCategories.prototype.delete = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('deleting an expense catageory requires an id'));
    }

    var url = '/expense_categories/' + options.id;
    this.client.delete(url, {}, cb);
};
