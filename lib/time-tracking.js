var TimeTracking;

module.exports = TimeTracking = function (api) {
    this.api = api;
    this.client = api.client;
};

TimeTracking.prototype.daily = function (options, cb) {
    var url = '/daily';

    if (options.date) {
        var first = new Date(options.date.getFullYear(), 0, 1),
            day_of_year = Math.round(
                ((options.date - first) / 1000 / 60 / 60 / 24) + 0.5,
                0
            );

        url += '/' + day_of_year + '/' + options.date.getFullYear();
    }

    this.client.get(url, {}, cb);
};

TimeTracking.prototype.get = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('retrieving a single entry requires an entry id'));
    }

    var url = '/daily/show/' + options.id;
    this.client.get(url, {}, cb);
};

TimeTracking.prototype.toggleTimer = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('toggling an entry requires an entry id'));
    }

    var url = '/daily/timer/' + options.id;
    this.client.get(url, {}, cb);
};

TimeTracking.prototype.create = function (options, cb) {
    var url = '/daily/add',
        time_entry = {
            "request": options
        };

    this.client.post(url, time_entry, cb);
};

TimeTracking.prototype.delete = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('deleting an entry requires an entry id'));
    }

    var url = '/daily/delete/' + options.id;
    this.client.delete(url, {}, cb);
};

TimeTracking.prototype.update = function (options, cb) {
    if (options.id === undefined) {
        return cb(new Error('updating an entry requires an entry id'));
    }

    var url = '/daily/update/' + options.id,
        time_entry = {
            "request": options
        };

    delete time_entry.request.id;
    this.client.post(url, time_entry, cb);
};
