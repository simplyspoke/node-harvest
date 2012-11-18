var UserAssignment;

module.exports = UserAssignment = function(api) {
    this.api = api;
    this.client = api.client;
};

UserAssignment.prototype.listByProject = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/projects/' + options.project_id + '/user_assignments';

    this.client.get(url, {}, cb);

};

UserAssignment.prototype.get = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/projects/' + options.project_id + '/user_assignments/' + options.id;

    this.client.get(url, {}, cb);

};

UserAssignment.prototype.assign = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO
    var user_assignment = '<user>' +
	    '<id type="integer">23445<id>' +
	    '<user>';

    var url = '/projects/' + options.project_id + '/user_assignments';

    this.client.post(url, user_assignment, cb);

};

UserAssignment.prototype.update = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var user_assignment = '<user-assignment>' +
	    '<user-id type="integer">1423</user-id>' +
	    '<project-id type="integer">3423</project-id>' +
	    '<deactivated type="boolean">true</deactivated>' +
	    '<hourly-rate type="decimal">95.0</hourly-rate>' +
	    '<is-project-manager type="boolean">false</is-project-manager>' +
	    '</user-assignment>';

    var url = '/projects/' + options.project_id + '/user_assignments/' + options.id;

    this.client.get(url, user_assignment, cb);

};

UserAssignment.prototype.remove = function(options, cb) {
 
    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/projects/' + options.project_id + '/user_assignments/' + options.id;

    this.client.delete(url, {}, cb);

};
