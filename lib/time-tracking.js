var TimeTracking, _isUndefined = require('../mixin');

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

    if(!_isUndefined(options, 'of_user')) {
        url += '?of_user=' + options.of_user;

        delete options.of_user;
    }

    this.client.get(url, {}, cb);
};

TimeTracking.prototype.get = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('getting daily time requires an id'));
    }
    
    var url = '/daily/show/' + options.id;

    if(!_isUndefined(options, 'of_user')) {
        url += '?of_user=' + options.of_user;

        delete options.of_user;
    }

    this.client.get(url, {}, cb);
};

TimeTracking.prototype.toggleTimer = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('toggling the timer requires an id'));
    }
    
    var url = '/daily/timer/' + options.id;

    if(!_isUndefined(options, 'of_user')) {
        url += '?of_user=' + options.of_user;

        delete options.of_user;
    }
    
    this.client.get(url, {}, cb);
};

TimeTracking.prototype.create = function (options, cb) {
    var url = '/daily/add';

    if(!_isUndefined(options, 'of_user')) {
        url += '?of_user=' + options.of_user;

        delete options.of_user;
    }

    this.client.post(url, options, cb);
};

TimeTracking.prototype.delete = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('deleting time requires an id'));
    }

    var url = '/daily/delete/' + options.id;

    if(!_isUndefined(options, 'of_user')) {
        url += '?of_user=' + options.of_user;

        delete options.of_user;
    }

    this.client.delete(url, {}, cb);
};

TimeTracking.prototype.update = function (options, cb) {
    if (_isUndefined(options, 'id')) {
        return cb(new Error('updating time requires an id'));
    }

    var url = '/daily/update/' + options.id;

    if(!_isUndefined(options, 'of_user')) {
        url += '?of_user=' + options.of_user;

        delete options.of_user;
    }

    delete options.id;
    this.client.post(url, options, cb);
};
