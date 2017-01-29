'use strict';

var isUndefined = require('../mixins').isUndefined,
  ofUserUrl = require('../mixins').ofUserUrl,
  dayOfYear = require('day-of-year');

var TimeTracking = function(api) {
  this.api = api;
  this.client = api.client;
};

TimeTracking.prototype.daily = function(options, cb) {
  var url = '/daily';

  if (options.date) {
    var day_of_year = dayOfYear(options.date);
    url += '/' + day_of_year + '/' + options.date.getFullYear();
    delete options.date;
  }

  this.client.get(url, {}, cb);
};

TimeTracking.prototype.get = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('getting daily time requires an id'));
  }

  var url = '/daily/show/' + options.id;

  ofUserUrl(url, options);

  this.client.get(url, {}, cb);
};

TimeTracking.prototype.toggleTimer = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('toggling the timer requires an id'));
  }

  var url = '/daily/timer/' + options.id;

  ofUserUrl(url, options);

  this.client.get(url, {}, cb);
};

TimeTracking.prototype.create = function(options, cb) {
  var url = '/daily/add';

  ofUserUrl(url, options);

  this.client.post(url, options, cb);
};

TimeTracking.prototype.delete = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('deleting time requires an id'));
  }

  var url = '/daily/delete/' + options.id;

  this.client.delete(url, {}, cb);
};

TimeTracking.prototype.update = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('updating time requires an id'));
  }

  var url = '/daily/update/' + options.id;
  delete options.id;

  this.client.post(url, options, cb);
};

module.exports = TimeTracking;
