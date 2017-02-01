'use strict';

const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');
const camelCase = require('lodash/camelCase');
const replace = require('lodash/replace');
const restler = require('restler');
const request = require('request');
const qs = require('qs');
const util = require('util');

const isUndefined = require('./helpers').isUndefined;
const Throttle = require('./throttle.js');

const Harvest = function(config) {
  const self = this;

  if (!(this instanceof Harvest)) return new Harvest(config);

  if (!helpers.has(config, ['subdomain'])) {
    throw new Error('The Harvest API client requires a subdomain');
  }

  this.host = 'https://' + config.subdomain + '.harvestapp.com';
  this.user_agent = config.user_agent;
  this.debug = config.debug || false;
  this.throttle_concurrency = config.throttle_concurrency || null;

  // this.use_oauth = (has(config, ['identifier', 'secret', 'redirect_uri'])) || (has(config, 'access_token'));
  this.use_basic_auth = helpers.has(config, ['email', 'password']);

  if (this.use_basic_auth) {
    this.email = config.email;
    this.password = config.password;
  } else if (this.use_oauth) {
    this.identifier = config.identifier;
    this.secret = config.secret;
    this.redirect_uri = config.redirect_uri;
    this.access_token = config.access_token || false;
  } else {
    throw new Error('The Harvest API client requires credentials for basic authentication or an identifier, secret and redirect_uri (or an access_token) for OAuth');
  }

  // Require and instantiate the resources lazily.
  fs.readdirSync(path.join(__dirname, 'lib')).forEach(name => {
    var prop = camelCase(name.slice(0, -3));
    var Resource = require(`./lib/${name}`);

    self[prop] = new(Resource)(self);
  });
}

Harvest.prototype.client = function client(method, uri, data, cb) {
  const self = this;

  const options = {
    baseUrl: this.host
  }

  if (this.use_basic_auth) {
    options.auth = {
      username: this.email,
      password: this.password
    }
  } else {
    if (!this.access_token) {
      throw new Error('An access token is required if using oAuth, use parseAccessCode or pass an access_token before making any requests');
    }
    options.auth = {
      auth: {
        'bearer': this.access_token
      }
    }
  }

  options.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  if (this.debug) {
    // console.log('run', method, uri, data);
  }

  options.method = method;
  options.uri = uri;
  options.qs = data;

  // console.log(options);

  return request(options, function(error, response, body) {
    console.log(response.headers);
    cb(error, response, body);
  });
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

  return request.post(this.host + '/oauth2/token', {
    data: options
  }).on('complete', function(response) {
    if (!response.access_token) {
      throw new Error('Provided access code was rejected by Harvest, no token was returned');
    }

    this.access_token = response.access_token;

    cb(this.access_token);
  });
};

module.exports = Harvest;
