'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const qs = require('qs');

const helpers = require('../helpers');

const apiBase = {
  /**
   * [list description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  list(options, cb) {
    let uri = this.baseUri;

    this.harvest.request('GET', uri, options, cb);
  },

  /**
   * [get description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  get(id, cb) {
    if (!id) {
      return cb(new Error(`retrieving a single ${this.name} requires an id`));
    }

    let uri = this.baseUri + id;

    this.harvest.request('GET', uri, {}, cb);
  },

  /**
   * [create description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  create(options, cb) {
    let uri = this.baseUri;

    this.harvest.request('POST', uri, options, cb);
  },

  /**
   * [update description]
   * @param  {[type]}   options [description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  update(id, options, cb) {
    if (!id) {
      return cb(new Error(`updating a single ${this.name} requires an id`));
    }

    let uri = this.baseUri + id;

    this.harvest.request('PUT', uri, options, cb);
  },

  /**
   * [delete description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  delete(id, cb) {
    if (!id) {
      return cb(new Error(`deleting a single ${this.name} requires an id`));
    }

    let uri = this.baseUri + id;

    this.harvest.request('DELETE', uri, {}, cb);

  }
};

module.exports = apiBase;
