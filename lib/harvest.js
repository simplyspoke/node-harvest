'use strict';

const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');
const camelCase = require('lodash/camelCase');
const replace = require('lodash/replace');

const isUndefined = require('./helpers').isUndefined;
const Client = require('./client.js');

function Harvest(config) {
  if (!(this instanceof Harvest)) return new Harvest(config);

  const self = this;

  if (!helpers.has(config, ['subdomain'])) {
    throw new Error('The Harvest API client requires a subdomain');
  }

  this.host = 'https://' + config.subdomain + '.harvestapp.com';
  this.user_agent = config.user_agent;
  this.debug = config.debug || false;
  this.concurrency = config.throttle_concurrency || null;

  this.use_oauth = (helpers.has(config, ['identifier', 'secret', 'redirectUri'])) || (helpers.has(config, 'accessToken'));
  this.use_basic_auth = helpers.has(config, ['email', 'password']);

  if (this.use_basic_auth) {
    this.email = config.email;
    this.password = config.password;
  } else if (this.use_oauth) {
    this.identifier = config.identifier;
    this.secret = config.secret;
    this.redirectUri = config.redirectUri;
    this.accessToken = config.accessToken || false;
  } else {
    throw new Error('The Harvest API client requires credentials for basic authentication or an identifier, secret and redirectUri (or an accessToken) for OAuth');
  }

  // Require and instantiate the resources lazily.
  fs.readdirSync(path.join(__dirname, 'api')).forEach(name => {
    var prop = camelCase(name.slice(0, -3));
    var Resource = require(`./api/${name}`);

    self[prop] = new(Resource)(self);
  });

  this._client = new Client(this);
}

Harvest.prototype.request = function request(method, uri, data, cb) {
  const self = this;

  if (this.debug) {
    console.log('run', method, uri, data);
  }

  self._client.push({
    method: method,
    uri: uri,
    qs: data
  }, cb);
}

Harvest.prototype.getAccessTokenURL = function() {
  return this.host +
    '/oauth2/authorize?client_id=' + this.identifier +
    '&redirect_uri=' + encodeURIComponent(this.redirect_uri) +
    '&response_type=code';
};

Harvest.prototype.parseAccessCode = function(access_code, cb) {
  this.access_code = access_code;

  let options = {
    'code': this.access_code,
    'client_id': this.identifier,
    'client_secret': this.secret,
    'redirect_uri': this.redirect_uri,
    'grant_type': 'authorization_code'
  };

  if (this.debug) {
    // console.log('request token', options);
  }

  // return request.post(this.host + '/oauth2/token', {
  //   data: options
  // }).on('complete', function(response) {
  //   if (!response.access_token) {
  //     throw new Error('Provided access code was rejected by Harvest, no token was returned');
  //   }
  //
  //   this.accessToken = response.access_token;
  //
  //   cb(this.accessToken);
  // });
};

module.exports = Harvest;
