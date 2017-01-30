'use strict';

const mixins = require('../mixins');

function Invoices(api) {
  this.api = api;
  this.client = api.client;
}

Invoices.prototype.list = function(options, cb) {
  options = options === undefined ? {} : options;
  let self = this;
  let url = '/invoices';

  let invoices = [];
  let all = false

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
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('getting an invoice requires an id'));
  }

  let url = '/invoices/' + options.id;
  this.client(url, 'GET', {}, cb);
};

Invoices.prototype.create = function(options, cb) {
  let url = '/invoices';
  delete options.id;
  this.client(url, 'POST', options, cb);

};

Invoices.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating an invoice requires an id'));
  }

  let url = '/invoices/' + options.id;
  delete options.id;
  this.client(url, 'PUT', options, cb);
};

Invoices.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting an invoice requires an id'));
  }

  let url = '/invoices/' + options.id;
  this.client(url, 'DELETE', {}, cb);
};

module.exports = Invoices;
