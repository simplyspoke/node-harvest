var Tasks;

module.exports = Tasks = function(api) {
    this.api = api;
    this.client = api.client;
};

Tasks.prototype.list = function(options, cb) {

    var url = '/tasks';

    this.client.get(url, {}, cb);

};

Tasks.prototype.get = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/tasks/' + options.id;

    this.client.get(url, {}, cb);

};

Tasks.prototype.create = function(options, cb) {

    var task = '<task>' +
	    '<billable-by-default type="boolean">false</billable-by-default>' +
	    '<default-hourly-rate type="decimal">100</default-hourly-rate>' +
	    '<is-default type="boolean">false</is-default>' +
	    '<name>Server Admninistration</name>' +
	    '</task>';

    var url = '/tasks';

    this.client.post(url, task, cb);

};

Tasks.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var task = '<task>' +
	    '<billable-by-default type="boolean">false</billable-by-default>' +
	    '<default-hourly-rate type="decimal">100</default-hourly-rate>' +
	    '<is-default type="boolean">false</is-default>' +
	    '<name>Server Admninistration</name>' +
	    '</task>';

    var url = '/tasks/' + options.id;

    this.client.put(url, task, cb);

};

Tasks.prototype.activate = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/tasks/' + options.id + '/activate';

    this.client.get(url, {}, cb);

};

Tasks.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/tasks/' + options.id;

    this.client.delete(url, {}, cb);

};
