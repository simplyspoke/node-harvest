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
});
