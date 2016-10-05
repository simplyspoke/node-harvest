var appendQuery = require('append-query');

var Expenses, _isUndefined = require('../mixin');

function ofUserUrl(url, options) {
    if (options.of_user) {
        url = appendQuery(url, {of_user: options.of_user});
        delete options.of_user;
        return url;
    }
}

module.exports = Expenses = function (api) {
    this.api = api;
    this.client = api.client;
};

Expenses.prototype.list = function (options, cb) {
    var url = '/expenses';
    url = ofUserUrl(url, options);

    this.client.get(url, {}, cb);
};

Expenses.prototype.get = function (options, cb) {
    if (_isUndefined(option, 'id')) {
        return cb(new Error('retrieving a single exspense requires an id'));
    }

    var url = '/expenses/' + options.id;
    url = ofUserUrl(url, options);

    this.client.get(url, {}, cb);
};

Expenses.prototype.create = function (options, cb) {
    var url = '/expenses';
    url = ofUserUrl(url, options);

    delete options.id;
    this.client.post(url, options, cb);
};

Expenses.prototype.update = function (options, cb) {
    if (_isUndefined(option, 'id')) {
        return cb(new Error('updating a single expense requires an id'));
    }

    var url = '/expenses/' + options.id;
    url = ofUserUrl(url, options);

    delete options.id;
    this.client.put(url, options, cb);
};

Expenses.prototype.delete = function (options, cb) {
    if (_isUndefined(option, 'id')) {
        return cb(new Error('deleting a single expense requires an id'));
    }

    var url = '/expenses/' + options.id;
    url = ofUserUrl(url, options);

    this.client.delete(url, {}, cb);
};

Expenses.prototype.attachReceipt = function (options, cb) {
    if (_isUndefined(option, 'id')) {
        return cb(new Error('attaching a receipt requires an id'));
    }

    // TODO post image data
    // POST /expenses/#{expense_id}/receipt HTTP/1.1
    // User-Agent: #{Your app name here}
    // Host: #{yoursubdomain}.harvestapp.com
    // Accept: application/xml
    // Authorization: Basic (insert your authentication string here)
    // Content-Length: 47899
    // Content-Type: multipart/form-data; boundary=------------------------------b7edea381b46
    // ------------------------------b7edea381b46
    // Content-Disposition: form-data; name="expense[receipt]"; filename="hotel.jpg"
    // Content-Type: image/jpeg
    //
    // #{ BINARY IMAGE DATA }
    //
    // ------------------------------b7edea381b46

    var url = '/expenses/' + options.id + '/receipt';
    url = ofUserUrl(url, options);

    this.client.post(url, {}, cb);
};

Expenses.prototype.getReceipt = function (options, cb) {
    if (_isUndefined(option, 'id')) {
        return cb(new Error('getting a receipt requires an id'));
    }

    var url = '/expenses/' + options.id + '/receipt';
    url = ofUserUrl(url, options);

    this.client.get(url, {}, cb);
};
