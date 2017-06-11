'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

/**
 * [Projects description]
 * @param {[type]} harvest [description]
 */
function Projects(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'projects';
  this.baseUri = `/${this.name}/`;
}

assign(Projects.prototype, apiBase);

/**
 * [toggleActivation description]
 * @param  {[type]}   options [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
Projects.prototype.toggle = function(id, cb) {
  if (!id) {
    return cb(new Error('toggling activation on a project requires an id'));
  }

  let uri = this.baseUri + id + '/toggle';

  this.harvest.request('PUT', uri, {}, cb);
};

module.exports = Projects;
