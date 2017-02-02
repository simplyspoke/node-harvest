'use strict';

const helpers = require('../helpers');

function Invoices(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

Invoices.prototype.list = function(options, cb) {
  options = options === undefined ? {} : options;
  let self = this;
  let uri = '/invoices';

  let invoices = [];
  let all = false

  if (options.all || options.page === undefined) {
    all = options.all || true;
    delete options.all;
    options.page = options.page || 1;
  }

  function fetch_invoices(data, callback, options) {

    self.harvest.request('GET', uri, options, function(err, new_invoices) {
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
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('getting an invoice requires an id'));
  }

  let uri = '/invoices/' + options.id;
  this.harvest.request('GET', uri, {}, cb);
};

Invoices.prototype.create = function(options, cb) {
  let uri = '/invoices';
  delete options.id;
  this.harvest.request('POST', uri, options, cb);

};

Invoices.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating an invoice requires an id'));
  }

  let uri = '/invoices/' + options.id;
  delete options.id;
  this.harvest.request('PUT', uri, options, cb);
};

Invoices.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting an invoice requires an id'));
  }

  let uri = '/invoices/' + options.id;
  this.harvest.request('DELETE', uri, {}, cb);
};

module.exports = Invoices;
