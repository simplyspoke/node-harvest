var TimeTracking, _isUndefined = require('../mixin');
var DayOfYear = require("day-of-year");

module.exports = TimeTracking = function (api) {
    this.api = api;
    this.client = api.client;
};

TimeTracking.prototype.daily = function (options, cb) {
    var url = '/daily';
    var args = [];

    if (options.date) {
        var day_of_year = DayOfYear(options.date);
        url += '/' + day_of_year + '/' + options.date.getFullYear();
    }

    if(!_isUndefined(options, 'of_user')) {
        args.push('of_user=' + options.of_user);

        delete options.of_user;
    }

    if(!_isUndefined(options, 'slim')) {
        args.push('slim=' + options.slim);

        delete options.slim;
    }
    
    if(args.length > 0) {
        url += "?" + args.join("&");
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
