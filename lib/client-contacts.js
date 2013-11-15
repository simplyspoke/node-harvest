var ClientContacts;

module.exports = ClientContacts = function (api) {
    this.api = api;
    this.client = api.client;
};

ClientContacts.prototype.list = function (options, cb) {
    var url = '/contacts';
    this.client.get(url, {}, cb);
};

ClientContacts.prototype.listByClient = function (options, cb) {
    if (options.client_id === undefined) {
        return cb(new Error('retrieving a contacts by client requires a client_id'));
    }

    var url = '/clients/' + options.client_id + '/contacts';
    this.client.get(url, {}, cb);
};

ClientContacts.prototype.get = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a contact an id'));
    }

    var url = '/contacts/' + options.id;
    this.client.get(url, {}, cb);
};

ClientContacts.prototype.create = function (options, cb) {
    var url = '/contacts',
        contact = {
            "contact": options
        };

    delete contact.contact.id;
    this.client.post(url, contact, cb);
};

ClientContacts.prototype.update = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a contact an id'));
    }

    var url = '/contacts/' + options.id,
        contact = {
            "contact": options
        };

    delete contact.contact.id;
    this.client.put(url, contact, cb);
};

ClientContacts.prototype.delete = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a contact an id'));
    }

    var url = '/contacts/' + options.id;
    this.client.delete(url, {}, cb);
};
