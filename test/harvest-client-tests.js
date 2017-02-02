'use strict';

const assert = require('assert');
const config = require('./common').config;
const Harvest = require('../lib/harvest');

const harvest = require('./common').harvest;

describe('The Harvest API Client', function() {
  describe('Instantiating a Harvest instance', function() {
    it('should be able to work with HTTP basic authentication', function() {
      let harvest = new Harvest({
        subdomain: config.subdomain,
        email: config.email,
        password: config.password
      });
      assert(typeof harvest === 'object');
    });
    it('should be able to work with OAuth 2.0', function() {
      let harvest = new Harvest({
        subdomain: config.subdomain,
        identifier: config.identifier,
        secret: config.secret,
        redirectUri: config.redirectUri
      });
      assert(typeof harvest === 'object');
    });
  });
  describe('Get an access code url', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.getAccessTokenURL, 'function');
    });
    it('should return a string', function() {
      assert.equal(typeof harvest.getAccessTokenURL(), 'string');
    });
  });
  describe('Parse as access code', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.parseAccessCode, 'function');
    });
  });
});
