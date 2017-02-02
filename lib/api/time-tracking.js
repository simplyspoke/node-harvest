'use strict';

const helpers = require('../helpers');

function TimeTracking(harvest) {
  this.harvest = harvest;
  this.request = harvest.request;
}

TimeTracking.prototype.daily = function(options, cb) {
  let uri = '/daily';

  if (options.date) {
    uri += helpers.dayOfYear(options.date);
    delete options.date;
  }

  this.request('GET', uri, {}, cb);
};

TimeTracking.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting daily time requires an id'));
  }

  let uri = '/daily/show/' + options.id;

  helpers.ofUseruri(uri, options);

  this.request('GET', uri, {}, cb);
};

TimeTracking.prototype.toggleTimer = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling the timer requires an id'));
  }

  let uri = '/daily/timer/' + options.id;

  helpers.ofUseruri(uri, options);

  this.request('GET', uri, {}, cb);
};

TimeTracking.prototype.create = function(options, cb) {
  let uri = '/daily/add';

  helpers.ofUseruri(uri, options);

  this.request('POST', uri, options, cb);
};

TimeTracking.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting time requires an id'));
  }

  let uri = '/daily/delete/' + options.id;

  this.request('DELETE', uri, {}, cb);
};

TimeTracking.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating time requires an id'));
  }

  let uri = '/daily/update/' + options.id;
  delete options.id;

  this.request('POST', uri, options, cb);
};

module.exports = TimeTracking;
