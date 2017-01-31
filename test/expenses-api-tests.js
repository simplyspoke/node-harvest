'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});

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
  });
  describe('Retrieve a receipt image from an expense', function() {
    it('should implement the getReceipt method', function() {
      assert.equal(typeof harvest.expenses.getReceipt, 'function');
    });
  });
});
