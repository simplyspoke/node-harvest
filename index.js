'use strict';

const fs = require('fs');
const path = require('path');
const has = require('lodash/has');
const startCase = require('lodash/startCase');
const replace = require('lodash/replace');
const restler = require('restler');
const request = require('request');
const qs = require('qs');
const util = require('util');

const isUndefined = require('./mixins').isUndefined;
const Throttle = require('./throttle.js');

function Harvest(config) {
  let self = this;

  if (!has(config, 'subdomain')) {
    throw new Error('The Harvest API client requires a subdomain');
  }

  self.host = 'https://' + config.subdomain + '.harvestapp.com';
  self.user_agent = config.user_agent;
  self.debug = config.debug || false;
  self.throttle_concurrency = config.throttle_concurrency || null;

  self.use_oauth = (has(config, ['identifier', 'secret', 'redirect_uri'])) || (has(config, 'access_token'));
  self.use_basic_auth = (has(config, ['email', 'password']));

  if (!self.use_basic_auth) {
    self.email = config.email;
    self.password = config.password;
  } else if (!self.use_oauth) {
    self.identifier = config.identifier;
    self.secret = config.secret;
    self.redirect_uri = config.redirect_uri;
    self.access_token = config.access_token || false;
  } else {
    throw new Error('The Harvest API client requires credentials for basic authentication or an identifier, secret and redirect_uri (or an access_token) for OAuth');
  }

  let RestService = restler.service(function(username, password) {
    this.defaults.username = username;
    this.defaults.password = password;
  }, {
    baseURL: self.host
  }, {
    run: function(type, url, data) {
      if (self.debug) {
        console.log('run', type, url, data);
      }

      if (self.use_oauth) {
        if (!self.access_token) {
          throw new Error('An access token is required if using oAuth, use parseAccessCode or pass an access_token before making any requests');
        }
        url = url.indexOf('?') > -1 ? url + '&access_token=' + self.access_token : url + '?access_token=' + self.access_token;
      }

      let options = {};
      options.headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };

      if (type === 'get') {
        if (Object.keys(data).length) {
          let query = qs.stringify(data, {
            arrayFormat: 'brackets'
          });

          if (typeof query == 'string' && query.length > 0) {
            url.indexOf('?') > -1 ? url + '&' + query : url + '?' + query;
          }

          data = {}
        }
      }

      if (typeof data !== 'undefined') {
        if (typeof data === 'object') {
          // restler uses url encoding to transmit data
          // url encoding does not support data types
          data = JSON.stringify(data);
          options.headers['Content-Length'] = data.length;
        } else {
          options.headers['Content-Length'] = data.length;
        }
      } else {
        options.headers['Content-Length'] = 0;
      }

      options.data = data;
      switch (type) {
        case 'GET':
          return this.get(url, options);

        case 'POST':
          return this.post(url, options);

        case 'PUT':
          return this.put(url, options);

        case 'DELETE':
          return this.del(url, options);
      }
      return this;
    }
  });

  self.service = new RestService(self.email, self.password);
  self.throttle = new Throttle(self.throttle_concurrency);

  self.client = function(url, method, data, cb) {
    self.throttle.push(function() {
      return self.service.run(method, url, data);
    }, cb);
  }

  return this;
}

Harvest.prototype.getAccessTokenURL = function() {
  let self = this;

  return self.host +
    '/oauth2/authorize?client_id=' + self.identifier +
    '&redirect_uri=' + encodeURIComponent(self.redirect_uri) +
    '&response_type=code';
};

Harvest.prototype.parseAccessCode = function(access_code, cb) {
  let self = this;

  self.access_code = access_code;

  let options = {
    'code': self.access_code,
    'client_id': self.identifier,
    'client_secret': self.secret,
    'redirect_uri': self.redirect_uri,
    'grant_type': 'authorization_code'
  };

  if (self.debug) {
    console.log('request token', options);
  }

  request.post(self.host + '/oauth2/token', {
    data: options
  }).on('complete', function(response) {
    if (!response.access_token) {
      throw new Error('Provided access code was rejected by Harvest, no token was returned');
    }

    self.access_token = response.access_token;

    cb(self.access_token);
  });
};

// Require and instantiate the resources lazily.
fs.readdirSync(path.join(__dirname, 'lib')).forEach(name => {
  let prop = replace(startCase(name.slice(0, -3)), ' ', '');

  Object.defineProperty(Harvest.prototype, prop, {
    get: function get() {
      let Resource = require(`./lib/${name}`);

      return Object.defineProperty(this, prop, {
        value: new Resource(this)
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
