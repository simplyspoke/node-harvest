var People;
var encode = require('./util/string').encodeHTML;

module.exports = People = function(api) {
    this.api = api;
    this.client = api.client;
};

People.prototype.list = function(options, cb) {

    var url = '/people';

    this.client.get(url, {}, cb);

};

People.prototype.get = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/people/' + options.id;

    this.client.get(url, {}, cb);

};

People.prototype.create = function(options, cb) {

    var user = '<user>';
    if (typeof options.first_name !== "undefined")
	user += '<first-name>' + encode(options.first_name) + '</first-name>';
    if (typeof options.last_name !== "undefined")
	user += '<last-name>' + encode(options.last_name) + '</last-name>';
    if (typeof options.email !== "undefined")
	user += '<email>' + encode(options.email) + '</email>';
    if (typeof options.timezone !== "undefined")
	user += '<timezone>' + encode(options.timezone) + '</timezone>';
    if (typeof options.is_admin !== "undefined")
	user += '<is-admin type="boolean">' + encode(options.is_admin) + '</is-admin>';
    if (typeof options.telephone !== "undefined")
	user += '<telephone>' + encode(options.telephone) + '</telephone>';
    user += '</user>';

    var url = '/people';

    this.client.post(url, user, cb);

};

People.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var user = '<user>';
    if (typeof options.first_name !== "undefined")
	user += '<first-name>' + encode(options.first_name) + '</first-name>';
    if (typeof options.last_name !== "undefined")
	user += '<last-name>' + encode(options.last_name) + '</last-name>';
    if (typeof options.email !== "undefined")
	user += '<email>' + encode(options.email) + '</email>';
    if (typeof options.timezone !== "undefined")
	user += '<timezone>' + encode(options.timezone) + '</timezone>';
    if (typeof options.is_admin !== "undefined")
	user += '<is-admin type="boolean">' + encode(options.is_admin) + '</is-admin>';
    if (typeof options.telephone !== "undefined")
	user += '<telephone>' + encode(options.telephone) + '</telephone>';
    user += '</user>';

    var url = '/people/' + options.id;

    this.client.put(url, {}, cb);

};

People.prototype.toggle = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/people/' + options.id + '/toggle';

    this.client.post(url, {}, cb);

};

People.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/people/' + options.id;

    this.client.delete(url, {}, cb);

};

People.prototype.reset = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/people/' + options.id + '/reset_password';

    this.client.post(url, {}, cb);

};
