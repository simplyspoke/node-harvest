'use strict';

const assert = require('assert');
const base = require('../lib/mixins/api-base');
const child = require('../lib/mixins/api-child-base');

describe('Base API', function() {
  it('get should return an error if no id', function() {
    base.get(null, function(err) {
      assert(typeof err.message === 'string');
    });
  });
  it('update should return an error if no id', function() {
    base.update(null, {}, function(err) {
      assert(typeof err.message === 'string');
    });
  });
  it('delete should return an error if no id', function() {
    base.delete(null, function(err) {
      assert(typeof err.message === 'string');
    });
  });
});
describe('Child Base API', function() {
  describe('has', function() {
    let object = {
      some: true,
      test: true
    };

    it('list should be a function', function() {
      assert.equal(typeof child.list, 'function');
    });

    it('get should return an error if no ids are given', function() {
      child.get(null, null, function(err) {
        assert(typeof err.message === 'string');
      });
    });

    it('create should return an error if no ids are given', function() {
      child.create(null, {}, function(err) {
        assert(typeof err.message === 'string');
      });
    });

    it('update should return an error if no ids are given', function() {
      child.update(null, null, {}, function(err) {
        assert(typeof err.message === 'string');
      });
    });

    it('delete should return an error if no ids are given', function() {
      child.delete(null, null, function(err) {
        assert(typeof err.message === 'string');
      });
    });

    // it('buildUri should be a function', function() {
    //   assert.equal(typeof child.buildUri, 'function');
    // });
    //
    // it('buildUri should return a string', function() {
    //   assert.equal(typeof child.buildUri(), 'string');
    // });
  });
});
