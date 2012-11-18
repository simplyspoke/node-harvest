var Projects;

module.exports = Projects = function(api) {
    this.api = api;
    this.client = api.client;
};

Projects.prototype.list = function(options, cb) {

    var url = '/projects';

    this.client.get(url, {}, cb);

};

Projects.prototype.get = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/projects/' + options.id;

    this.client.get(url, {}, cb);

};

Projects.prototype.create = function(options, cb) {

    // TODO
    var project = '<project>' +
	    '<name>SuprGlu</name>' +
	    '<active type="boolean">true</active>' +
	    '<bill-by>none</bill-by>' +
	    '<client-id type="integer">2</client-id>' +
	    '<code></code>' +
	    '<notes></notes>' +
	    '<budget type="decimal"></budget>' +
	    '<budget-by>none</budget-by>' +
	    '</project>';

    var url = '/projects';

    this.client.post(url, project, cb);

};

Projects.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO
    var project = '<project>' +
	    '<name>SuprGlu</name>' +
	    '<active type="boolean">true</active>' +
	    '<bill-by>none</bill-by>' +
	    '<client-id type="integer">2</client-id>' +
	    '<code></code>' +
	    '<notes></notes>' +
	    '<budget type="decimal"></budget>' +
	    '<budget-by>none</budget-by>' +
	    '</project>';

    var url = '/projects/' + options.id;

    this.client.put(url, project, cb);

};

Projects.prototype.toggleActivation = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/projects/' + options.id + '/toggle';

    this.client.put(url, {}, cb);

};

Projects.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/projects/' + options.id;

    this.client.delete(url, {}, cb);

};
