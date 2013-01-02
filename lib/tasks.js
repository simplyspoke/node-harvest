var Tasks;
var encode = require('./util/string').encodeHTML;

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

    var task = '<task>';
    if (typeof options.billable_by_default !== "undefined")
	task += '<billable-by-default type="boolean">' + encode(options.billable_by_default) + '</billable-by-default>';
    if (typeof options.default_hourly_rate !== "undefined")
	task += '<default-hourly-rate type="decimal">' + encode(options.default_hourly_rate) + '</default-hourly-rate>';
    if (typeof options.is_default !== "undefined")
	task += '<is-default type="boolean">' + encode(options.is_default) + '</is-default>';
    if (typeof options.name !== "undefined")
	task += '<name>' + encode(options.name) + '</name>';
    task += '</task>';

    var url = '/tasks';

    this.client.post(url, task, cb);

};

Tasks.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var task = '<task>';
    if (typeof options.billable_by_default !== "undefined")
	task += '<billable-by-default type="boolean">' + encode(options.billable_by_default) + '</billable-by-default>';
    if (typeof options.default_hourly_rate !== "undefined")
	task += '<default-hourly-rate type="decimal">' + encode(options.default_hourly_rate) + '</default-hourly-rate>';
    if (typeof options.is_default !== "undefined")
	task += '<is-default type="boolean">' + encode(options.is_default) + '</is-default>';
    if (typeof options.name !== "undefined")
	task += '<name>' + encode(options.name) + '</name>';
    task += '</task>';

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
