'use strict';

const assert = require('assert');
const config = require('./common').config;
const Harvest = require('../lib/harvest');

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
        secret: config.secret
      });
      assert(typeof harvest === 'object');
    });
  });
});
