var Reports;

module.exports = Reports = function(api) {

    var self = this;

    this.api = api;
    this.client = api.client;

    this.timeEntriesByProject = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.timeEntriesByCurrentUser = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.timeEntriesByUser = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.yourTimeEntriesByProject = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.expensesByUser = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.expensesByProject = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    return this;
};