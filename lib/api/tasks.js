'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

/**
 * [Tasks description]
 * @param {[type]} harvest [description]
 */
function Tasks(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'tasks';
  this.baseUri = `/${this.name}/`;
}

assign(Tasks.prototype, apiBase);

/**
 * [activate description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
Tasks.prototype.activate = function(id, cb) {
  if (!id) {
    return cb(new Error('activating a task requires an id'));
  }

  let uri = '/tasks/' + id + '/activate';

  this.harvest.request('POST', uri, {}, cb);
};

module.exports = Tasks;
