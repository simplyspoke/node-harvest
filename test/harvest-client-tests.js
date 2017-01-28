var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index');

describe('The Harvest API Client', function() {
  describe('Instantiating a Harvest instance', function() {
    it('should be able to work with HTTP basic authentication', function() {
      var harvest = new Harvest({
        subdomain: config.harvest.subdomain,
        email: config.harvest.email,
        password: config.harvest.password
      });
      assert(typeof harvest === 'object');
    });
    it('should be able to work with OAuth 2.0', function() {
      var harvest = new Harvest({
        subdomain: config.harvest.subdomain,
        identifier: config.harvest.identifier,
        secret: config.harvest.secret
      });
      assert(typeof harvest === 'object');
    });
  });
});
