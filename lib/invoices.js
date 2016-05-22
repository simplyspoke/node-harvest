var Invoices, _isUndefined = require('../mixin');

module.exports = Invoices = function (api) {
    this.api = api;
    this.client = api.client;
};

Invoices.prototype.list = function (options, cb) {
    var self = this;

    var invoices = [];

    function fetch_invoices(data, callback, page){
        var url = '/invoices';
        if(page !== undefined){ url += "?page=" + page; }

        self.client.get(url, {}, function(err, new_invoices){
            if(err){ return callback(err); }
            data.push.apply(data, new_invoices);

            if(!options.all || new_invoices.length < 50){
                return callback(null, data);
            }else{
                return fetch_invoices(data, callback, page+1);
            }
        });
    }

    return fetch_invoices(invoices, cb, options.all ? 1 : options.page);
};

Invoices.prototype.get = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('getting an invoice requires an id'));
    }

    var url = '/invoices/' + options.id;
    this.client.get(url, {}, cb);
};

Invoices.prototype.create = function (options, cb) {
    var url = '/invoices';
    delete options.id;
    this.client.post(url, options, cb);

};

Invoices.prototype.update = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('updating an invoice requires an id'));
    }

    var url = '/invoices/' + options.id;
    delete options.id;
    this.client.put(url, options, cb);
};

Invoices.prototype.delete = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('deleting an invoice requires an id'));
    }

    var url = '/invoices/' + options.id;
    this.client.delete(url, {}, cb);
};
