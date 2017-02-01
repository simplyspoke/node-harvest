'use strict';

const assert = require('assert');
const helpers = require('../lib/helpers');

describe('Helpers', function() {
  describe('dayOfYear', function() {
    it('be a function', function() {
      assert.equal(typeof helpers.dayOfYear, 'function');
    });
    it('should accept a date parameter and return a string', function() {
      let result = helpers.dayOfYear(new Date('1/1/2017'));
      assert.equal(typeof result, 'string');
      assert.equal(result, '/1/2017');
    });
  });
  describe('getId', function() {
    it('be a function', function() {
      assert.equal(typeof helpers.getId, 'function');
    });
    it('should return the id at the end of a response location header', function() {
      assert.equal(2342, helpers.getId({
        headers: {
          location: '/sometest/2342'
        }
      }));
    });
  });
  describe('has', function() {
    let object = {
      some: true,
      test: true
    };
    it('should be a function', function() {
      assert.equal(typeof helpers.has, 'function');
    });
    it('should be true if an object has all the properties', function() {
      assert(helpers.has(object, ['some', 'test']));
    });
    it('should be false if an object does not have all the properties', function() {
      assert(!helpers.has(object, ['missing']));
    });
  });
  describe('ofUserUrl', function() {
    let url = 'http://localhost';
    let options = {
      of_user: 'userID'
    };
    it('be a function', function() {
      assert.equal(typeof helpers.ofUserUrl, 'function');
    });
    it('should return submitted url if of_user is not defined', function() {
      assert.equal(url, helpers.ofUserUrl(url, {}));
    });
    it('should an appended url with the of user parameter set', function() {
      assert.equal(url + '/?of_user=userID', helpers.ofUserUrl(url, options));
    });
    it('should delete the of_user property if defined', function() {
      assert.equal(typeof options.of_user, 'undefined');
    });
  });
});
