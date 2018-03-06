'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const helpers = require('../helpers');

const apiBase = {

  /**
   * [list description]
   * @param  {[type]}   options [description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  list(parentId, cb) {

    let uri = buildUri(this.parentName, parentId, this.name);

    this.harvest.request('GET', uri, {}, cb);
  },

  /**
   * [get description]
   * @param  {[type]}   options [description]
   * @param  {[type]}   options [description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  get(parentId, id, cb) {
    if (!parentId && !id) {
      return cb(new Error(`retrieving a single ${this.name} requires a ${this.parentName} id and ${this.name} id`));
    }

    let uri = buildUri(this.parentName, parentId, this.name) + id;

    this.harvest.request('GET', uri, {}, cb);
  },

  /**
   * [create description]
   * @param  {[type]}   options [description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  create(parentId, options, cb) {
    if (!parentId) {
      return cb(new Error(`creating a single ${this.name} requires a ${this.parentName} id`));
    }

    let uri = buildUri(this.parentName, parentId, this.name);

    this.harvest.request('POST', uri, options, cb);
  },

  /**
   * [update description]
   * @param  {[type]}   options [description]
   * @param  {[type]}   options [description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  update(parentId, id, options, cb) {
    if (!parentId && !id) {
      return cb(new Error(`updating a single ${this.name} requires a ${this.parentName} id and ${this.name} id`));
    }

    let uri = buildUri(this.parentName, parentId, this.name) + id;

    this.harvest.request('PUT', uri, options, cb);
  },

  /**
   * [delete description]
   * @param  {[type]}   options [description]
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  delete(parentId, id, cb) {
    if (!parentId && !id) {
      return cb(new Error(`deleting a single ${this.name} requires a ${this.parentName} id and ${this.name} id`));
    }

    let uri = buildUri(this.parentName, parentId, this.name) + id;

    this.harvest.request('DELETE', uri, {}, cb);

  }
};

apiBase.prototype = {};

module.exports = apiBase;


/**
 * [buildUri description]
 * @param  {[type]} parentId [description]
 * @return {[type]}         [description]
 */
function buildUri(parentName, parentId, name) {
  return `/${parentName}/${parentId}/${name}/`;
}
