'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index');

describe('The Harvest API Client', function() {
  describe('Instantiating a Harvest instance', function() {
    it('should be able to work with HTTP basic authentication', function() {
      var harvest = new Harvest({
        subdomain: process.env.subdomain || config.harvest.subdomain,
        email: process.env.email || config.harvest.email,
        password: process.env.password || config.harvest.password
      });
      assert(typeof harvest === 'object');
    });
    it('should be able to work with OAuth 2.0', function() {
      var harvest = new Harvest({
        subdomain: process.env.subdomain || config.harvest.subdomain,
        identifier: process.env.identifier || config.harvest.identifier,
        secret: process.env.secret || config.harvest.secret
      });
      assert(typeof harvest === 'object');
    });
  });
});
