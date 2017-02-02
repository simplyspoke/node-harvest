'use strict';

const assign = require('lodash/assign');

const helpers = require('../helpers');
const apiBase = require('../mixins/api-base');

function Tasks(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;

  this.name = 'tasks';
  this.baseUri = `/${this.name}/`;
}

assign(Tasks.prototype, apiBase);

Tasks.prototype.activate = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('activating a task requires an id'));
  }

  let uri = '/tasks/' + options.id + '/activate';

  this.harvest.request('GET', uri, {}, cb);
};

module.exports = Tasks;
