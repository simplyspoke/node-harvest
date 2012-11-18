var People;

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

    // TODO
    var user = '<user>' +
	    '<first-name>Edgar</first-name>' +
	    '<last-name>Ruth</last-name>' +
	    '<email>edgar@ruth.com</email>' +
	    '<timezone>Central Time (US &amp; Canada)</timezone>' +
	    '<is-admin type="boolean">false</is-admin>' +
	    '<telephone>444-444</telephone>' +
	    '</user>';

    var url = '/people';

    this.client.post(url, user, cb);

};

People.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO
    var user = '<user>' +
	    '<first-name>Edgar</first-name>' +
	    '<last-name>Ruth</last-name>' +
	    '<email>edgar@ruth.com</email>' +
	    '<timezone>Central Time (US &amp; Canada)</timezone>' +
	    '<is-admin type="boolean">false</is-admin>' +
	    '<telephone>444-444</telephone>' +
	    '</user>';

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
