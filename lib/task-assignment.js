var TaskAssignment;

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

    // TODO
    var task = '<task>' +
	    '<id type="integer">653425</id>' +
	    '</task>';

    var url = '/projects/' + options.project_id + '/task_assignments';

    this.client.post(url, task, cb);

};

TaskAssignment.prototype.create = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO
    var task = '<task>' +
	    '<name>Backend Development</name>' +
	    '</task>';

    var url = '/projects/' + options.project_id + '/task_assignments';

    this.client.post(url, task, cb);

};

TaskAssignment.prototype.update = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO
    var task_assignment = '<task-assignment>' +
	    '<billable type="boolean">true</billable>' +
	    '<deactivated type="boolean">false</deactivated>' +
	    '<budget type="decimal">3234</budget>' +
	    '<hourly-rate type="decimal">100</hourly-rate>' +
	    '</task-assignment>';

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
