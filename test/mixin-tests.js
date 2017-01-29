'use strict';

const assert = require('assert');
const mixins = require('../mixins');

describe('Mixins', function() {
  describe('isUndefined', function() {
    it('be a function', function() {
      assert.equal(typeof mixins.dayOfYear, 'function');
    });
    it('should accept a date parameter and return a string', function() {
      let result = mixins.dayOfYear(new Date('1/1/2017'));
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
      assert.equal(url, mixins.ofUserUrl(url, {}));
    });
    it('should an appended url with the of user parameter set', function() {
      assert.equal(url + '/?of_user=userID', mixins.ofUserUrl(url, options));
    });
    it('should delete the of_user property if defined', function() {
      assert.equal(typeof options.of_user, 'undefined');
    });
  });
});
