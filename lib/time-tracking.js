'use strict';

var mixins = require('../mixins'),
  has = require('lodash/has');

var TimeTracking = function(api) {
  this.api = api;
  this.client = api.client;
};

TimeTracking.prototype.daily = function(options, cb) {
  var url = '/daily';

  if (options.date) {
    url += mixins.dayOfYear(options.date);
    delete options.date;
  }

  this.client.get(url, {}, cb);
};

TimeTracking.prototype.get = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('getting daily time requires an id'));
  }

  var url = '/daily/show/' + options.id;
  
  mixins.ofUserUrl(url, options);

  this.client.get(url, {}, cb);
};

TimeTracking.prototype.toggleTimer = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('toggling the timer requires an id'));
  }

  var url = '/daily/timer/' + options.id;

  mixins.ofUserUrl(url, options);

  this.client.get(url, {}, cb);
};

TimeTracking.prototype.create = function(options, cb) {
  var url = '/daily/add';

  mixins.ofUserUrl(url, options);

  this.client.post(url, options, cb);
};

TimeTracking.prototype.delete = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('deleting time requires an id'));
  }

  var url = '/daily/delete/' + options.id;

  this.client.delete(url, {}, cb);
};

TimeTracking.prototype.update = function(options, cb) {
  if (has(options, 'id')) {
    return cb(new Error('updating time requires an id'));
  }

  var url = '/daily/update/' + options.id;
  delete options.id;

  this.client.post(url, options, cb);
};

module.exports = TimeTracking;
