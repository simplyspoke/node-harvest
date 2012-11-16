var Projects;

module.exports = Projects = function(api) {

    var self = this;

    this.api = api;
    this.client = api.client;

    this.list = function(options, cb) {

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

    this.toggleActivation = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.delete = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    return this;
};