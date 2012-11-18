var Clients;

module.exports = Clients = function(api) {
    this.api = api;
    this.client = api.client;
};

Clients.prototype.list = function(options, cb) {

    var url = '/clients';

    this.client.get(url, {}, cb);

};

Clients.prototype.get = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/clients/' + options.id;

    this.client.get(url, {}, cb);

};

Clients.prototype.create = function(options, cb) {

    var client = '<client>';
    if (typeof options.name !== "undefined")
	client += '<name>' + options.name + '</name>';
    if (typeof options.highrise_id !== "undefined")
	client += '<highrise-id type="integer">' + options.highrise_id + '</highrise-id>';
    if (typeof options.currency !== "undefined")
	client += '<currency>' + options.currency + '</currency>';
    if (typeof options.currency_symbol !== "undefined")
	client += '<currency-symbol>' + options.currency_symbol + '</currency-symbol>';
    if (typeof options.active !== "undefined")
	client += '<active type="boolean">' + options.active + '</active>';
    if (typeof options.details !== "undefined")
	client += '<details>' + options.details + '</details>';
    client += '</client>';

    var url = '/clients';

    this.client.get(url, client, cb);

};

Clients.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('updating an entry requires an entry id'));

    var client = '<client>';
    if (typeof options.name !== "undefined")
	client += '<name>' + options.name + '</name>';
    if (typeof options.highrise_id !== "undefined")
	client += '<highrise-id type="integer">' + options.highrise_id + '</highrise-id>';
    if (typeof options.currency !== "undefined")
	client += '<currency>' + options.currency + '</currency>';
    if (typeof options.currency_symbol !== "undefined")
	client += '<currency-symbol>' + options.currency_symbol + '</currency-symbol>';
    if (typeof options.active !== "undefined")
	client += '<active type="boolean">' + options.active + '</active>';
    if (typeof options.details !== "undefined")
	client += '<details>' + options.details + '</details>';
    client += '</client>';

    var url = '/clients/' + options.id;

    this.client.get(url, client, cb);

};

Clients.prototype.toggleActivation = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('updating an entry requires an entry id'));

    var url = '/clients/' + options.id + '/toggle';

    this.client.post(url, {}, cb);

};

Clients.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('updating an entry requires an entry id'));

    var url = '/clients/' + options.id;

    this.client.delete(url, {}, cb);

};
