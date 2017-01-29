'use strict';

var assert = require('assert'),
  config = require('../config'),
  Harvest = require('../index');

describe('The Harvest API Client', function() {
  describe('Instantiating a Harvest instance', function() {
    it('should be able to work with HTTP basic authentication', function() {
      var harvest = new Harvest({
        subdomain: config.subdomain,
        email: config.email,
        password: config.password
      });
      assert(typeof harvest === 'object');
    });
    it('should be able to work with OAuth 2.0', function() {
      var harvest = new Harvest({
        subdomain: config.subdomain,
        identifier: config.identifier,
        secret: config.secret
      });
      assert(typeof harvest === 'object');
    });
  });
});
