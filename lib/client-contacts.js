var ClientContacts;

module.exports = ClientContacts = function(api) {
    this.api = api;
    this.client = api.client;
};

ClientContacts.prototype.list = function(options, cb) {

    var url = '/contacts';

    this.client.get(url, {}, cb);

};

ClientContacts.prototype.listByClient = function(options, cb) {

    if (typeof options.client_id === "undefined")
        return cb(new Error('retrieving a contacts by client requires a client_id'));

    var url = '/clients/' + options.client_id + '/contacts';

    this.client.get(url, {}, cb);

};

ClientContacts.prototype.get = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a contact an id'));

    var url = '/contacts/' + options.id;

    this.client.get(url, {}, cb);

};

ClientContacts.prototype.create = function(options, cb) {

    // TODO
    var contact = '<contact>' +
	    '<client-id type="integer">9</client-id>' +
	    '<email>Jane@Doe.com</email>' +
	    '<first-name>Jane</first-name>' +
	    '<last-name>Doe</last-name>' +
	    '<phone-office>555.555.5555</phone-office>' +
	    '<phone-mobile>555.555.7777</phone-mobile>' +
	    '<title>President</title>' +
	    '<fax>555.555.9999</fax>' +
	    '</contact>';

    var url = '/contacts';

    this.client.post(url, contact, cb);

};

ClientContacts.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a contact an id'));

    var contact = '<contact>' +
	    '<client-id type="integer">9</client-id>' +
	    '<email>Jane@JaneDoe.com</email>' +
	    '<first-name>Jane</first-name>' +
	    '<last-name>Doe</last-name>' +
	    '<phone-office>555.555.1111</phone-office>' +
	    '<phone-mobile>555.555.2222</phone-mobile>' +
	    '<fax>555.555.3333</fax>' +
	    '</contact>';

    var url = '/contacts/' + options.id;

    this.client.put(url, contact, cb);

};

ClientContacts.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a contact an id'));

    var url = '/contacts/' + options.id;

    this.client.delete(url, {}, cb);

};
