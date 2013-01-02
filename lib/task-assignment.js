var TaskAssignment;
var encode = require('./util/string').encodeHTML;

module.exports = TaskAssignment = function(api) {
    this.api = api;
    this.client = api.client;
};

TaskAssignment.prototype.listByProject = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/projects/' + options.project_id + '/task_assignments';

    this.client.get(url, {}, cb);

};

TaskAssignment.prototype.get = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/projects/' + options.project_id + '/task_assignments/' + options.id;

    this.client.get(url, {}, cb);

};

TaskAssignment.prototype.assign = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var task = '<task>';
    if (typeof options.task_id !== "undefined")
	task += '<id type="integer">' + encode(options.task_id) + '</id>';
    task += '</task>';

    var url = '/projects/' + options.project_id + '/task_assignments';

    this.client.post(url, task, cb);

};

TaskAssignment.prototype.create = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var task = '<task>';
    if (typeof options.name !== "undefined")
	task += '<name>' + encode(options.name) + '</name>';
    task += '</task>';

    var url = '/projects/' + options.project_id + '/task_assignments';

    this.client.post(url, task, cb);

};

TaskAssignment.prototype.update = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var task_assignment = '<task-assignment>';
    if (typeof options.billable !== "undefined")
	task_assignment += '<billable type="boolean">' + encode(options.billable) + '</billable>';
    if (typeof options.deactivated !== "undefined")
	task_assignment += '<deactivated type="boolean">' + encode(options.deactivated) + '</deactivated>';
    if (typeof options.budget !== "undefined")
	task_assignment += '<budget type="decimal">' + encode(options.budget) + '</budget>';
    if (typeof options.hourly_rate !== "undefined")
	task_assignment += '<hourly-rate type="decimal">' + encode(options.hourly_rate) + '</hourly-rate>';
    task_assignment += '</task-assignment>';

    var url = '/projects/' + options.project_id + '/task_assignments/' + options.id;

    this.client.put(url, task_assignment, cb);

};

TaskAssignment.prototype.remove = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/projects/' + options.project_id + '/task_assignments/' + options.id;

    this.client.delete(url, {}, cb);

};
