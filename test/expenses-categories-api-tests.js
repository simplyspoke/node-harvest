'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

describe('The Expenses Categories API', function() {
  describe('Show all expense categories', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.expenseCategories.list, 'function');
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
