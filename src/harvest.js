'use strict';

const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');
const camelCase = require('lodash/camelCase');
const replace = require('lodash/replace');

const isUndefined = require('./helpers').isUndefined;
const Client = require('./client.js');

/**
 * [Harvest description]
 * @param {Object} config Configuration settings
 * @param {String} options.subdomain The account subdomain
 * @param {String} options.email The account email if using basic authentication
 * @param {String} options.password The account password if using basic authentication
 * @param {String} options.identifier The app auth client_id
 * @param {String} options.secret The app auth secret
 * @param {String} options.redirectUri The redirect uri for authorization_code requests
 * @param {String} options.accessToken The oauth token authorized externally
 * @param {String} options.user_agent Defines the user agent of the client
 * @param {Number} options.concurrency Sets the amount of request to run concurrently
 * @param {Boolean} options.debug Turns on debugging
 */
function Harvest(config) {
  if (!(this instanceof Harvest)) return new Harvest(config);

  const self = this;

  if (!helpers.has(config, ['subdomain'])) {
    throw new Error('The Harvest API client requires a subdomain');
  }

  self.host = 'https://' + config.subdomain + '.harvestapp.com';
  self.user_agent = config.user_agent;
  self.concurrency = config.throttle_concurrency || null;
  self.debug = config.debug || false;

  self.useOAuth = (helpers.has(config, ['identifier', 'secret', 'redirectUri'])) || (helpers.has(config, ['accessToken']));
  self.useBasic = helpers.has(config, ['email', 'password']);

  if (self.useBasic) {
    self.email = config.email;
    self.password = config.password;
  } else if (self.useOAuth) {
    self.identifier = config.identifier;
    self.secret = config.secret;
    self.redirectUri = config.redirectUri;
    self.accessToken = config.accessToken || false;
  } else {
    throw new Error('The Harvest API client requires credentials for basic authentication or an identifier, secret and redirectUri (or an accessToken) for OAuth');
  }

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

/**
 * [getAccessTokenURL description]
 * @return {String} [description]
 */
Harvest.prototype.getAccessTokenURL = function() {
  return this.host +
    '/oauth2/authorize?client_id=' + this.identifier +
    '&redirect_uri=' + encodeURIComponent(this.redirectUri) +
    '&response_type=code';
};

/**
 * [parseAccessCode description]
 * @param  {String}   access_code [description]
 * @param  {Function} cb          [description]
 * @return {String}               Success or error message.
 */
Harvest.prototype.parseAccessCode = function(access_code, cb) {
  let options = {
    'code': access_code,
    'client_id': this.identifier || '',
    'client_secret': this.secret || '',
    'redirect_uri': this.redirectUri || '',
    'grant_type': 'authorization_code'
  };

  this._client.setAccessToken(options, cb);
};

module.exports = Harvest;
