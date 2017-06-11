'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

describe('The Invoices API', function() {
  describe('Show recently issued invoices', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.invoices.list, 'function');
    });
    it('should return something', function(done) {
      harvest.invoices.list({}, function(err, res, invoices) {
        assert(!err);
        assert(Array.isArray(invoices));
        assert.equal(typeof invoices[0], 'object');
        done();
      })
    });
  });
  describe('Show a particular invoice', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.invoices.get, 'function');
    });
  });
  describe('Create a new invoice', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.invoices.create, 'function');
    });
  });
  describe('Update existing invoice', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.invoices.update, 'function');
    });
  });
  describe('Delete a invoice', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.invoices.delete, 'function');
    });
  });
});
