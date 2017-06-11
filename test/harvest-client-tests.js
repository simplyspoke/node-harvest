'use strict';

const assert = require('assert');
const config = require('./common').config;
const Harvest = require('../lib/harvest');
const Client = require('../lib/client');

const harvest = require('./common').harvest;

const TEST_CLIENT_NAME = 'TEST_CLIENT_NAME';

describe('The Harvest API Client', function() {
  describe('Instantiating a Harvest instance', function() {
    it('should be able to create an instance without new keyword', function() {
      let harvest = Harvest({ // eslint-disable-line new-cap
        subdomain: config.subdomain,
        email: config.email,
        password: config.password
      });
      assert(typeof harvest === 'object');
    });
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
    it('should return an error with OAuth missing an accesstoken', function() {
      let harvest = new Harvest({
        subdomain: config.subdomain,
        identifier: config.identifier,
        secret: config.secret,
        redirectUri: config.redirectUri
      });
      harvest.clients.create({
        'client': {
          'name': TEST_CLIENT_NAME
        }
      }, function(err) {
        assert.equal(err.message, 'An access token is required if using oAuth, use parseAccessCode or pass an accessToken before making any requests');
      });
    });
    it('should return an error if there is no subdomain', function() {
      try {
        let harvest = new Harvest({});
      } catch (err) {
        console.error(err);
        assert(err.message === 'The Harvest API client requires a subdomain');
      }
    });
    it('return an error if there is no auth', function() {
      try {
        let harvest = new Harvest({
          subdomain: config.subdomain
        });
      } catch (err) {
        console.error(err);
        assert(err.message === 'The Harvest API client requires credentials for basic authentication or an identifier, secret and redirectUri (or an accessToken) for OAuth');
      }
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
    it('should return an error with incorrect access code', function() {
      harvest.parseAccessCode('testcode!', function(err, message) {
        assert.equal(err, 'Provided access code was rejected by Harvest, no token was returned');
      })
    });
  });
  describe('Parse timeout', function() {
    it('should parse a date from a timestamp', function() {
      let timeout = Client.prototype.parseTimeout(1497040704);
      assert.equal(!isNaN(timeout), true);
    });
    it('should parse a date from the string provided', function() {
      let timeout = Client.prototype.parseTimeout('Wed, 21 Oct 2015 07:28:00 GMT');
      assert.equal(!isNaN(timeout), true);
    });
    it('should return an error if the string is not a date', function() {
      let timeout = Client.prototype.parseTimeout('Some Test');
      assert.equal(timeout, 'cannot parse Retry-After value: Some Test');
    });
  });
});
