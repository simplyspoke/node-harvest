var ClientContacts;
var encode = require('./util/string').encodeHTML;

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

    var contact = '<contact>';
    if (typeof options.client_id !== "undefined")
	contact += '<client-id type="integer">' + encode(options.client_id) + '</client-id>';
    if (typeof options.email !== "undefined")
	contact += '<email>' + encode(options.email) + '</email>';
    if (typeof options.first_name !== "undefined")
	contact += '<first-name>' + encode(options.first_name) + '</first-name>';
    if (typeof options.last_name !== "undefined")
	contact += '<last-name>' + encode(options.last_name) + '</last-name>';
    if (typeof options.phone_office !== "undefined")
	contact += '<phone-office>' + encode(options.phone_office) + '</phone-office>';
    if (typeof options.phone_mobile !== "undefined")
	contact += '<phone-mobile>' + encode(options.phone_mobile) + '</phone-mobile>';
    if (typeof options.title !== "undefined")
	contact += '<title>' + encode(options.title) + '</title>';
    if (typeof options.fax !== "undefined")
	contact += '<fax>' + encode(options.fax) + '</fax>';
    contact += '</contact>';

    var url = '/contacts';

    this.client.post(url, contact, cb);

};

ClientContacts.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a contact an id'));

    var contact = '<contact>';
    if (typeof options.client_id !== "undefined")
	contact += '<client-id type="integer">' + encode(options.client_id) + '</client-id>';
    if (typeof options.email !== "undefined")
	contact += '<email>' + encode(options.email) + '</email>';
    if (typeof options.first_name !== "undefined")
	contact += '<first-name>' + encode(options.first_name) + '</first-name>';
    if (typeof options.last_name !== "undefined")
	contact += '<last-name>' + encode(options.last_name) + '</last-name>';
    if (typeof options.phone_office !== "undefined")
	contact += '<phone-office>' + encode(options.phone_office) + '</phone-office>';
    if (typeof options.phone_mobile !== "undefined")
	contact += '<phone-mobile>' + encode(options.phone_mobile) + '</phone-mobile>';
    if (typeof options.title !== "undefined")
	contact += '<title>' + encode(options.title) + '</title>';
    if (typeof options.fax !== "undefined")
	contact += '<fax>' + encode(options.fax) + '</fax>';
    contact += '</contact>';

    var url = '/contacts/' + options.id;

    this.client.put(url, contact, cb);

};

ClientContacts.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a contact an id'));

    var url = '/contacts/' + options.id;

    this.client.delete(url, {}, cb);

};
