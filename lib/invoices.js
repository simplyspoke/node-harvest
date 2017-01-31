'use strict';

const mixins = require('../mixins');

function Invoices(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
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

    self.harvest.client('GET', url, options, function(err, new_invoices) {
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
  this.harvest.client('GET', url, {}, cb);
};

Invoices.prototype.create = function(options, cb) {
  let url = '/invoices';
  delete options.id;
  this.harvest.client('POST', url, options, cb);

};

Invoices.prototype.update = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('updating an invoice requires an id'));
  }

  let url = '/invoices/' + options.id;
  delete options.id;
  this.harvest.client('PUT', url, options, cb);
};

Invoices.prototype.delete = function(options, cb) {
  if (!mixins.has(options, ['id'])) {
    return cb(new Error('deleting an invoice requires an id'));
  }

  let url = '/invoices/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

module.exports = Invoices;
