'use strict';

var isUndefined = require('../mixins').isUndefined;

var Invoices = function(api) {
  this.api = api;
  this.client = api.client;
};

Invoices.prototype.list = function(options, cb) {
  options = options === undefined ? {} : options;
  var self = this;
  var url = '/invoices';

  var invoices = [];
  var all = false

  if (options.all || options.page === undefined) {
    all = options.all || true;
    delete options.all;
    options.page = options.page || 1;
  }

  function fetch_invoices(data, callback, options) {

    self.client.get(url, options, function(err, new_invoices) {
      if (err) {
        return callback(err);
      }

      data.push.apply(data, new_invoices);

      if (all && new_invoices.length === 50) {
        options.page + 1;

        return fetch_invoices(data, callback, options);
      }

      return callback(null, data);
    });
  }

  return fetch_invoices(invoices, cb, options);
};

Invoices.prototype.get = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('getting an invoice requires an id'));
  }

  var url = '/invoices/' + options.id;
  this.client.get(url, {}, cb);
};

Invoices.prototype.create = function(options, cb) {
  var url = '/invoices';
  delete options.id;
  this.client.post(url, options, cb);

};

Invoices.prototype.update = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('updating an invoice requires an id'));
  }

  var url = '/invoices/' + options.id;
  delete options.id;
  this.client.put(url, options, cb);
};

Invoices.prototype.delete = function(options, cb) {
  if (isUndefined(options, 'id')) {
    return cb(new Error('deleting an invoice requires an id'));
  }

  var url = '/invoices/' + options.id;
  this.client.delete(url, {}, cb);
};

module.exports = Invoices;
