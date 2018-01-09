'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;
const config = common.config;

describe('The Account API', function() {
  describe('Show account info', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.account.get, 'function');
    });

    it('should return account info', function(done) {
      harvest.account.get(function(err, response, info) {
        if (err) {
          assert(!err, 'There should not be and error of ' + err.message);
        }
        assert(info, 'Info must contain some information');
        assert.equal(typeof info, 'object', 'Info should be an object');
        assert(info.company, 'Info must contain some information about the company');
        assert.equal(info.company.full_domain, config.subdomain + '.harvestapp.com');

        assert(info.user, 'Info must contain some information about the user');
        assert(info.user.email, config.email);

        done();
      });
    });
  });

  describe('Show account throttle status', function() {
    it('should implement the rate_limit_status method', function() {
      assert.equal(typeof harvest.account.rate_limit_status, 'function');
    });

    it('should return throttle status', function(done) {
      harvest.account.rate_limit_status(function(err, response, status) {
        if (err) {
          assert(!err, 'There should not be and error of ' + err.message);
        }

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
