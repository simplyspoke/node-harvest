'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  Account = harvest.Account;

var subdomain = process.env.subdomain || config.harvest.subdomain,
  email = process.env.email || config.harvest.email;

describe('The Account API', function() {
  describe('Show account info', function() {
    it('should implement the get method', function() {
      assert.equal(typeof Account.get, 'function');
    });

    it('should return account info', function(done) {
      Account.get({}, function(err, info) {
        if (err) throw err;
        assert(info, 'Info must contain some information');
        assert(info.company, 'Info must contain some information about the company');
        assert.equal(info.company.full_domain, subdomain + '.harvestapp.com');

        assert(info.user, 'Info must contain some information about the user');
        assert(info.user.email, email);

        done();
      });
    });
  });

  describe('Show account throttle status', function() {
    it('should implement the rate_limit_status method', function() {
      assert.equal(typeof Account.rate_limit_status, 'function');
    });

    it('should return throttle status', function(done) {
      Account.rate_limit_status({}, function(err, status) {
        if (err) throw err;

        assert(status, 'Status must contain some information');
        assert.equal(typeof status.timeframe_limit, 'number', 'Status must contain timeframe limit');
        assert.equal(typeof status.max_calls, 'number', 'Status must contain max calls limit');
        assert.equal(typeof status.count, 'number', 'Status must contain counter of calls');
        assert.equal(typeof status.requests_available, 'number', 'Status must contain number of available requests');

        done();
      });
    });
  });
});
