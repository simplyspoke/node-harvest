'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

/**
 * [Invoices description]
 * @param {[type]} harvest [description]
 */
function Invoices(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'invoices';
  this.baseUri = `/${this.name}/`;
}

assign(Invoices.prototype, pick(apiBase, ['get', 'create', 'update', 'delete']));

/**
 * [list description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
Invoices.prototype.list = function(options, cb) {
  options = options === undefined ? {} : options;
  let self = this;
  let uri = this.baseUri;

  let invoices = [];
  let all = false

  if (options.all || options.page === undefined) {
    all = options.all || true;
    delete options.all;
    options.page = options.page || 1;
  }

  /**
   * [fetch_invoices description]
   * @param  {[type]}   data     [description]
   * @param  {Function} callback [description]
   * @param  {[type]}   options  [description]
   * @return {[type]}            [description]
   */
  function fetch_invoices(data, options, callback) {
    self.harvest.request('GET', uri, options, function(err, res, new_invoices) {
      // if (err) {
      //   return callback(err);
      // }

      data.push.apply(data, new_invoices);

      if (all && new_invoices.length === 50) {
        options.page += 1;

        return fetch_invoices(data, options, callback);
      }

      return callback(err, res, data);
    });
  }

  fetch_invoices(invoices, options, cb);
};

module.exports = Invoices;
