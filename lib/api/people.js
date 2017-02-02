'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

/**
 * [People description]
 * @param {[type]} harvest [description]
 */
function People(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'people';
  this.baseUri = `/${this.name}/`;
}

assign(People.prototype, apiBase);

/**
 * [toggle description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
People.prototype.toggle = function(id, cb) {
  if (!id) {
    return cb(new Error('toggling a person requires an id'));
  }

  let uri = this.baseUri + id + '/toggle';

  this.harvest.request('POST', uri, {}, cb);
};

module.exports = People;
