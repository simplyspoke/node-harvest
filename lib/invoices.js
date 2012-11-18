var Invoices;

module.exports = Invoices = function(api) {
    this.api = api;
    this.client = api.client;
};

Invoices.prototype.list = function(options, cb) {

    var url = '/invoices';

    this.client.get(url, {}, cb);

};

Invoices.prototype.get = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.id;

    this.client.get(url, {}, cb);

};

Invoices.prototype.create = function(options, cb) {

    // TODO
    var invoice = '<invoice>' +
	    '<due-at type="date">2008-02-06</due-at>' + 
	    '<due-at-human-format>due upon receipt</due-at-human-format>' +
	    '<client-id type="integer">8</client-id>' +
	    '<currency>United States Dollars - USD</currency>' +
	    '<issued-at type="date">2008-02-06</issued-at>' +
	    '<subject>Your invoice subject goes here</subject>' +
	    '<notes>Some notes go here</notes>' +
	    '<number>82208</number>' +
	    '<kind>project</kind>' +
	    '<projects-to-invoice>3</projects-to-invoice>' +
	    '<import-hours>yes</import-hours>' +
	    '<import-expenses>yes</import-expenses>' +
	    '<period-end type="date">2008-03-31</period-end>' +
	    '<period-start type="date">2007-06-26</period-start>' +
	    '<expense-period-end type="date">2008-03-31</expense-period-end>' +
	    '<expense-period-start type="date">2007-06-26</expense-period-start>' +
	    '<updated-at type="datetime">2008-04-09T12:07:56Z</updated-at>' +
	    '<created-at type="datetime">2008-04-09T12:07:56Z</created-at>' +
	    '</invoice>';

    var url = '/invoices';

    this.client.post(url, invoice, cb);

};

Invoices.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var invoice = '<invoice>' +
	    '<due-at type="date">2008-02-06</due-at>' +
	    '<due-at-human-format>due upon receipt</due-at-human-format>' +
	    '<client-id type="integer">8</client-id>' +
	    '<currency>United States Dollars - USD</currency>' +
	    '<issued-at type="date">2008-02-06</issued-at>' +
	    '<notes>Some notes go here</notes>' +
	    '<number>82208</number>' +
	    '</invoice>';

    var url = '/invoices/' + options.id;

    this.client.put(url, invoice, cb);

};

Invoices.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.id;

    this.client.delete(url, {}, cb);

};
