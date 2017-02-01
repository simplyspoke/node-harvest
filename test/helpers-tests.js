'use strict';

const assert = require('assert');
const helpers = require('../lib/helpers');

describe('Helpers', function() {
  describe('isUndefined', function() {
    it('be a function', function() {
      assert.equal(typeof helpers.dayOfYear, 'function');
    });
    it('should accept a date parameter and return a string', function() {
      let result = helpers.dayOfYear(new Date('1/1/2017'));
      assert.equal(typeof result, 'string');
      assert.equal(result, '/1/2017');
    });
  });
  describe('ofUserUrl', function() {
    let url = 'http://localhost';
    let options = {
      of_user: 'userID'
    };
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
