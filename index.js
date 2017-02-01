'use strict';

const fs = require('fs');
const path = require('path');
const mixins = require('./mixins');
const camelCase = require('lodash/camelCase');
const replace = require('lodash/replace');
const restler = require('restler');
const request = require('request');
const qs = require('qs');
const util = require('util');

const isUndefined = require('./mixins').isUndefined;
const Throttle = require('./throttle.js');

const Harvest = function(config) {
  if (!(this instanceof Harvest)) return new Harvest(config);

  if (!mixins.has(config, ['subdomain'])) {
    throw new Error('The Harvest API client requires a subdomain');
  }

  this.host = 'https://' + config.subdomain + '.harvestapp.com';
  this.user_agent = config.user_agent;
  this.debug = config.debug || false;
  this.throttle_concurrency = config.throttle_concurrency || null;

  // this.use_oauth = (has(config, ['identifier', 'secret', 'redirect_uri'])) || (has(config, 'access_token'));
  this.use_basic_auth = mixins.has(config, ['email', 'password']);

  this.count = 0;

  console.log('31', this);

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
}

Harvest.prototype.service = function() {
  this.count--;
};

Harvest.prototype.client = function client(method, uri, data, cb) {
  const self = this;

  const options = {
    baseUrl: self.host,
    uri: uri
  }

  console.log('60', options);

  if (self.use_basic_auth) {
    options.auth = {
      username: self.email,
      password: self.password
    }
  } else {
    if (!self.access_token) {
      throw new Error('An access token is required if using oAuth, use parseAccessCode or pass an access_token before making any requests');
    }
    options.auth = {
      auth: {
        'bearer': self.access_token
      }
    }
  }

  options.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  if (self.debug) {
    console.log('run', method, uri, data);
  }

  self.client = function () {
    options.method = method;
    options.qs = data;

    console.log(options);

    request(options, function(error, response, body) {
      console.log(error, response, body);
      cb(error, response, body);
    });
  }
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
    console.log('request token', options);
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

// Require and instantiate the resources lazily.
fs.readdirSync(path.join(__dirname, 'lib')).forEach(name => {
  const prop = camelCase(name.slice(0, -3));
  // const Resource = require(`./lib/${name}`);
  //
  // Harvest.prototype[prop] = new Resource(Harvest.prototype);

  Object.defineProperty(Harvest.prototype, prop, {
    get: function get() {
      const Resource = require(`./lib/${name}`);

      return Object.defineProperty(this, prop, {
        value: new Resource(Harvest)
      })[prop];
    },
    set: function set(value) {
      return Object.defineProperty(this, prop, {
        value
      })[prop];
    }
  });
});

module.exports = Harvest;
