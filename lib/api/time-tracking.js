'use strict';

const helpers = require('../helpers');

function TimeTracking(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

TimeTracking.prototype.daily = function(options, cb) {
  let url = '/daily';

  if (options.date) {
    url += helpers.dayOfYear(options.date);
    delete options.date;
  }

  this.harvest.client('GET', url, {}, cb);
};

TimeTracking.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting daily time requires an id'));
  }

  let url = '/daily/show/' + options.id;

  helpers.ofUserUrl(url, options);

  this.harvest.client('GET', url, {}, cb);
};

TimeTracking.prototype.toggleTimer = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling the timer requires an id'));
  }

  let url = '/daily/timer/' + options.id;

  helpers.ofUserUrl(url, options);

  this.harvest.client('GET', url, {}, cb);
};

TimeTracking.prototype.create = function(options, cb) {
  let url = '/daily/add';

  helpers.ofUserUrl(url, options);

  this.harvest.client('POST', url, options, cb);
};

TimeTracking.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting time requires an id'));
  }

  let url = '/daily/delete/' + options.id;

  this.harvest.client('DELETE', url, {}, cb);
};

TimeTracking.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating time requires an id'));
  }

  let url = '/daily/update/' + options.id;
  delete options.id;

  this.harvest.client('POST', url, options, cb);
};

module.exports = TimeTracking;