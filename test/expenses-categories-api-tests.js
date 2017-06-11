'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

let TEST_ID;

describe('The Expenses Categories API', function() {
  describe('Show all expense categories', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.expenseCategories.list, 'function');
    });
    it('should return an array of expense Categories', function(done) {
      harvest.expenseCategories.list({}, function(err, res, results) {
        TEST_ID = results[0].expense_category.id;
        assert(typeof results, 'array');
        done();
      });
    });
  });
  describe('Get an expense category', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.expenseCategories.get, 'function');
    });
  });
  describe('Create a new expense category', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.expenseCategories.create, 'function');
    });
  });
  describe('Update existing expense category', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.expenseCategories.update, 'function');
    });
  });
  describe('Delete an expense category', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.expenseCategories.delete, 'function');
    });
  });
});
