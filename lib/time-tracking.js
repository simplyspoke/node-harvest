'use strict';

const mixins = require('../mixins');

function TimeTracking(api) {
  this.api = api;
  this.client = api.client;
}

TimeTracking.prototype.daily = function(options, cb) {
  let url = '/daily';

  if (options.date) {
    url += mixins.dayOfYear(options.date);
    delete options.date;
  }

  this.client(url, 'GET', {}, cb);
};

TimeTracking.prototype.get = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('getting daily time requires an id'));
  }

  let url = '/daily/show/' + options.id;

  mixins.ofUserUrl(url, options);

  this.client(url, 'GET', {}, cb);
};

TimeTracking.prototype.toggleTimer = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('toggling the timer requires an id'));
  }

  let url = '/daily/timer/' + options.id;

  mixins.ofUserUrl(url, options);

  this.client(url, 'GET', {}, cb);
};

TimeTracking.prototype.create = function(options, cb) {
  let url = '/daily/add';

  mixins.ofUserUrl(url, options);

  this.client(url, 'POST', options, cb);
};

TimeTracking.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting time requires an id'));
  }

  let url = '/daily/delete/' + options.id;

  this.client(url, 'DELETE', {}, cb);
};

TimeTracking.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating time requires an id'));
  }

  let url = '/daily/update/' + options.id;
  delete options.id;

  this.client(url, 'POST', options, cb);
};

module.exports = TimeTracking;
