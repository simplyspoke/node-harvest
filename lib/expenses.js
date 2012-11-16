var Expenses;

module.exports = Expenses = function(api) {

    var self = this;

    this.api = api;
    this.client = api.client;

    this.exports = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.get = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.create = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.update = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.delete = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.attachReceipt = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.getReceipt = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.toggle = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    return this;
};