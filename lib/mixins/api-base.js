'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const qs = require('qs');

const helpers = require('../helpers');

const apiBase = {
  list(options, cb) {
    let uri = this.baseUri;

    this.harvest.request('GET', uri, {}, cb);
  },

  get(options, cb) {
    if (!helpers.has(options, ['id'])) {
      return cb(new Error(`retrieving a single ${this.name} requires an id`));
    }

    let uri = this.baseUri + options.id;

    this.harvest.request('GET', uri, {}, cb);
  },

  create(options, cb) {
    let uri = this.baseUri;

    this.harvest.request('POST', uri, options, cb);
  },

  update(options, cb) {
    if (!helpers.has(options, ['id'])) {
      return cb(new Error(`updating a single ${this.name} requires an id`));
    }

    let uri = this.baseUri + options.id;

    this.harvest.request('PUT', uri, options, cb);
  },

  delete(options, cb) {
    if (!helpers.has(options, ['id'])) {
      return cb(new Error(`deleting a single ${this.name} requires an id`));
    }

    let uri = this.baseUri + options.id;

    this.harvest.request('DELETE', uri, {}, cb);

  }
};

module.exports = apiBase;
