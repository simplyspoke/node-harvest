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

    var user_assignment = '<user>';
    if (typeof options.user_id !== "undefined")
	user_assignment += '<id type="integer">' + options.user_id + '<id>';
    user_assignment += '<user>';

    var url = '/projects/' + options.project_id + '/user_assignments';

    this.client.post(url, user_assignment, cb);

};

UserAssignment.prototype.update = function(options, cb) {

    if (typeof options.project_id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var user_assignment = '<user-assignment>';
    if (typeof options.user_id !== "undefined")
	user_assignment += '<user-id type="integer">' + options.user_id + '</user-id>';
    if (typeof options.project_id !== "undefined")
	user_assignment += '<project-id type="integer">' + options.project_id + '</project-id>';
    if (typeof options.deactivated !== "undefined")
	user_assignment += '<deactivated type="boolean">' + options.deactivated + '</deactivated>';
    if (typeof options.hourly_rate !== "undefined")
	user_assignment += '<hourly-rate type="decimal">' + options.hourly_rate + '</hourly-rate>';
    if (typeof options.is_project_manager !== "undefined")
	user_assignment += '<is-project-manager type="boolean">' + options.is_project_manager + '</is-project-manager>';
    user_assignment += '</user-assignment>';

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
