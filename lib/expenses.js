var Expenses, _isUndefined = require('../mixin'), fs = require('fs'), request = require('request');

module.exports = Expenses = function (api) {
    this.api = api;
    this.client = api.client;
};

Expenses.prototype.list = function (options, cb) {
    var url = '/expenses';
    this.client.get(url, {}, cb);
};

Expenses.prototype.get = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('retrieving a single exspense requires an id'));
    }

    var url = '/expenses/' + options.id;
    this.client.get(url, {}, cb);
};

Expenses.prototype.create = function (options, cb) {
    var url = '/expenses';
    delete options.id;
    this.client.post(url, options, cb);
};

Expenses.prototype.update = function (options, cb) {
    if (_isUndefined(option, 'id')) {
        return cb(new Error('updating a single expense requires an id'));
    }

    var url = '/expenses/' + options.id;
    delete options.id;
    this.client.put(url, options, cb);
};

Expenses.prototype.delete = function (options, cb) {
    if (_isUndefined(option, 'id')) {
        return cb(new Error('deleting a single expense requires an id'));
    }

    var url = '/expenses/' + options.id;
    this.client.delete(url, {}, cb);
};

Expenses.prototype.attachReceipt = function(options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('attaching a receipt requires an id'));
    }
    if (_isUndefined(options, 'file')) {
        return cb(new Error('attaching a receipt requires a file object'));
    }
    if (_isUndefined(options.file, 'path') || _isUndefined(options.file, 'originalname')) {
        return cb(new Error('file object must have a path and an originalname'));
    }
    var formData = {
        'expense[receipt]': {
            value: fs.createReadStream(options.file.path),
            options: {
                filename: options.file.originalname
            }
        }
    };
    var options = {
        url: this.api.host + '/expenses/' + options.id + "/receipt",
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'Expenses'
        },
        formData: formData
    };
    if (this.api.use_basic_auth) {
        options.auth = {
            user: this.api.email,
            pass: this.api.password
        }
    } else {
        if(!this.api.access_token) {
            throw new Error("An access token is required if using oAuth to upload files");
        }
        options.url += "?access_token=" + this.api.access_token;
    }
    request.post(options, function callback(err, httpResponse, body) {
        if (err) {
            return cb(err, {});
        }
        return cb(null, body);
    });
};

Expenses.prototype.getReceipt = function (options, cb) {
    if (_isUndefined(option, 'id')) {
        return cb(new Error('getting a receipt requires an id'));
    }

    var url = '/expenses/' + options.id + '/receipt';
    this.client.get(url, {}, cb);
};
