var InvoiceMessages;

module.exports = InvoiceMessages = function(api) {

    var self = this;

    this.api = api;
    this.client = api.client;

    this.messagesByInvoice = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.getByInvoice = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.create = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.delete = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.markSent = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.markClosed = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.markOpen = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.markDraft = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    return this;
};