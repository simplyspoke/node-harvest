'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const qs = require('qs');

const helpers = require('../helpers');

const apiBase = {
  list(options, cb) {

    let uri = this.buildUri(options);

    this.harvest.request('GET', uri, {}, cb);
  },

  get(options, cb) {
    if (!helpers.has(options, [this.parentKey, 'id'])) {
      return cb(new Error(`retrieving a single ${this.name} requires a ${this.parentName} ${this.parentKey} and ${this.name} id`));
    }

    let uri = this.buildUri(options) + options.id;

    this.harvest.request('GET', uri, {}, cb);
  },

  create(options, cb) {
    if (!helpers.has(options, [this.parentKey, 'id'])) {
      return cb(new Error(`creating a single ${this.name} requires a ${this.parentName} ${this.parentKey}`));
    }

    let uri = this.buildUri(options);
    delete options.invoice_id;

    this.harvest.request('POST', uri, options, cb);
  },

  update(options, cb) {
    if (!helpers.has(options, ['id'])) {
      return cb(new Error(`updating a single ${this.name} requires a ${this.parentName} ${this.parentKey} and ${this.name} id`));
    }

    let uri = this.buildUri(options);
    delete options.invoice_id;
    delete options.id;

    this.harvest.request('PUT', uri, options, cb);
  },

  delete(options, cb) {
    if (!helpers.has(options, ['id'])) {
      return cb(new Error(`deleting a single ${this.name} requires a ${this.parentName} ${this.parentKey} and ${this.name} id`));
    }

    let uri = this.buildUri(options) + options.id;

    this.harvest.request('DELETE', uri, {}, cb);

  },
  buildUri(options) {
    return `/${this.parentName}/${options[this.parentKey]}/${this.name}/`;
  }
};

module.exports = apiBase;
