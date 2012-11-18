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

    // TODO
    var client = '<client>' +
	    '<name>Company LLC</name>' +
	    '<highrise-id type="integer">110011</highrise-id>' +
	    '<currency>United States Dollars - USD</currency>' +
	    '<currency-symbol>$</currency-symbol>' +
	    '<active type="boolean">true</active>' +
	    '<details>123 Main St.\n' +
	    'Third Floor\n' +
	    'New York, NY 10011\n' +
	    'USA\n' +
	    '212-555-1212\n' +
	    '212-555-1213 (fax)\n' +
	    'http://www.company.com</details>' +
	    '</client>';

    var url = '/clients';

    this.client.get(url, client, cb);

};

Clients.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('updating an entry requires an entry id'));

    // TODO
    var client = '<client>' +
	    '<name>Company LLC</name>' +
	    '<details>123 Main St.' +
	    'Third Floor' +
	    'New York, NY 10011' +
	    'USA' +
	    '212-555-1212' +
	    '212-555-1213 (fax)' +
	    'http://www.company.com</details>' +
	    '</client>';

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
