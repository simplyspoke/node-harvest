var TaskAssignment;

module.exports = TaskAssignment = function(api) {

    var self = this;

    this.api = api;
    this.client = api.client;

    this.listByProject = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.get = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.assign = function(options, cb) {

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

    this.remove = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    return this;
};