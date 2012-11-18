var TimeTracking;

module.exports = TimeTracking = function(api) {
    this.api = api;
    this.client = api.client;
};

TimeTracking.prototype.daily = function(options, cb) {

    var url = '/daily';

    if (options.date) {
	var first = new Date(options.date.getFullYear(), 0, 1);
	var day_of_year = Math.round(
	    ((options.date - first) / 1000 / 60 / 60 / 24) + .5, 0);

        url += '/' + day_of_year + '/' + options.date.getFullYear();
    }

    this.client.get(url, {}, cb);

};

TimeTracking.prototype.get = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/daily/show/' + options.id;

    this.client.get(url, {}, cb);

};

TimeTracking.prototype.toggleTimer = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('toggling an entry requires an entry id'));

    var url = '/daily/timer/' + options.id;

    this.client.get(url, {}, cb);

};

TimeTracking.prototype.create = function(options, cb) {

    var time_entry = '<request>';
    if (typeof options.notes !== "undefined")
	time_entry += '<notes>' + options.notes + '</notes>';
    if (typeof options.hours !== "undefined")
	time_entry += '<hours>' + options.hours + '</hours>';
    if (typeof options.project_id !== "undefined")
	time_entry += '<project_id type="integer">' + options.project_id + '</project_id>';
    if (typeof options.task_id !== "undefined")
	time_entry += '<task_id type="integer">' + options.task_id + '</task_id>';
    if (typeof options.spent_at !== "undefined")
	time_entry += '<spent_at type="date">' + options.spent_at + '</spent_at>';
    time_entry += '</request>';

    var url = '/daily/add';

    this.client.post(url, time_entry, cb);

};

TimeTracking.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('deleting an entry requires an entry id'));

    var url = '/daily/delete/' + options.id;

    this.client.delete(url, {}, cb);

};

TimeTracking.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('updating an entry requires an entry id'));

    var time_entry = '<request>';
    if (typeof options.notes !== "undefined")
	time_entry += '<notes>' + options.notes + '</notes>';
    if (typeof options.hours !== "undefined")
	time_entry += '<hours>' + options.hours + '</hours>';
    if (typeof options.project_id !== "undefined")
	time_entry += '<project_id type="integer">' + options.project_id + '</project_id>';
    if (typeof options.task_id !== "undefined")
	time_entry += '<task_id type="integer">' + options.task_id + '</task_id>';
    if (typeof options.spent_at !== "undefined")
	time_entry += '<spent_at type="date">' + options.spent_at + '</spent_at>';
    time_entry += '</request>';

    var url = '/daily/update/' + options.id;

    this.client.post(url, time_entry, cb);

};
