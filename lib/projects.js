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

    var project = '<project>';
    if (typeof options.name !== "undefined")
	project += '<name>' + options.name + '</name>';
    if (typeof options.active !== "undefined")
	project += '<active type="boolean">' + options.active + '</active>';
    if (typeof options.bill_by !== "undefined")
	project += '<bill-by>' + options.bill_by + '</bill-by>';
    if (typeof options.client_id !== "undefined")
	project += '<client-id type="integer">' + options.client_id + '</client-id>';
    if (typeof options.code !== "undefined")
	project += '<code>' + options.code + '</code>';
    if (typeof options.notes !== "undefined")
	project += '<notes>' + options.notes + '</notes>';
    if (typeof options.budget !== "undefined")
	project += '<budget type="decimal">' + options.budget + '</budget>';
    if (typeof options.budget_by !== "undefined")
	project += '<budget-by>' + options.budget_by + '</budget-by>';
    project += '</project>';

    var url = '/projects';

    this.client.post(url, project, cb);

};

Projects.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var project = '<project>';
    if (typeof options.name !== "undefined")
	project += '<name>' + options.name + '</name>';
    if (typeof options.active !== "undefined")
	project += '<active type="boolean">' + options.active + '</active>';
    if (typeof options.bill_by !== "undefined")
	project += '<bill-by>' + options.bill_by + '</bill-by>';
    if (typeof options.client_id !== "undefined")
	project += '<client-id type="integer">' + options.client_id + '</client-id>';
    if (typeof options.code !== "undefined")
	project += '<code>' + options.code + '</code>';
    if (typeof options.notes !== "undefined")
	project += '<notes>' + options.notes + '</notes>';
    if (typeof options.budget !== "undefined")
	project += '<budget type="decimal">' + options.budget + '</budget>';
    if (typeof options.budget_by !== "undefined")
	project += '<budget-by>' + options.budget_by + '</budget-by>';
    project += '</project>';

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
