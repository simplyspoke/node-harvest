'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

describe('The Expenses API', function() {
  describe('Show all expenses', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.expenses.list, 'function');
    });
  });
  describe('Get an expense', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.expenses.get, 'function');
    });
  });
  describe('Create a new expense', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.expenses.create, 'function');
    });
  });
  describe('Update existing expense', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.expenses.update, 'function');
    });
  });
  describe('Delete an expense', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.expenses.delete, 'function');
    });
  });
  describe('Attach a receipt image to an expense', function() {
    it('should implement the attachReceipt method', function() {
      assert.equal(typeof harvest.expenses.attachReceipt, 'function');
    });
    it('should should return an error when valid ids', function() {
      harvest.expenses.attachReceipt(null, {}, function(err, res, entries) {
        assert(err.message === 'attaching a receipt requires an id');
      });
    });
    it('should should return an error when file', function() {
      harvest.expenses.attachReceipt(15113947, {}, function(err, res, entries) {
        assert(err.message === 'attaching a receipt requires a file object');
      });
    });
    it('should should return an error when file has no path', function() {
      harvest.expenses.attachReceipt(15113947, {
        file: ''
      }, function(err, res, entries) {
        assert(err.message === 'file object must have a path and an originalname');
      });
    });
  });
  describe('Retrieve a receipt image from an expense', function() {
    it('should implement the getReceipt method', function() {
      assert.equal(typeof harvest.expenses.getReceipt, 'function');
    });
    it('should should return an error when valid ids', function() {
      harvest.expenses.getReceipt(null, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
    it('should work properly', function(done) {
      harvest.expenses.getReceipt(15113947, function(err, res, results) {
        assert(!err);
        done();
      });
    });
  });
});
