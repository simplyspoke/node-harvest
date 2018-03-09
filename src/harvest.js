

const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');
const camelCase = require('lodash/camelCase');
const replace = require('lodash/replace');

const isUndefined = require('./helpers').isUndefined;
const Client = require('./client.js');

function Harvest(config) {
  // Require and instantiate the resources lazily.
  fs.readdirSync(path.join(__dirname, 'api')).forEach(name => {
    var prop = camelCase(name.slice(0, -3));
    var Resource = require(`./api/${name}`);

    self[prop] = new(Resource)(self);
  });

  // Add a new Client instance as a module method
  self._client = new Client(self);
}

/**
 * [request description]
 * @param  {String}   method [description]
 * @param  {String}   uri    [description]
 * @param  {Object}   data   [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
Harvest.prototype.request = function request(method, uri, data, cb) {
  const self = this;

  if (self.debug) {
    console.log('run', method, uri, data);
  }

  self._client.push({
    method: method,
    uri: uri,
    qs: data
  }, cb);
}

module.exports = Harvest;
