'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  Expenses = harvest.Expenses;

describe('The Expenses API', function() {
  describe('Show all expense categories', function() {
    it('should implement the list method', function() {
      assert.equal(typeof Expenses.list, 'function');
    });
  });
  describe('Get an expense category', function() {
    it('should implement the get method', function() {
      assert.equal(typeof Expenses.get, 'function');
    });
  });
  describe('Create a new expense category', function() {
    it('should implement the create method', function() {
      assert.equal(typeof Expenses.create, 'function');
    });
  });
  describe('Update existing expense category', function() {
    it('should implement the update method', function() {
      assert.equal(typeof Expenses.update, 'function');
    });
  });
  describe('Delete an expense category', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof Expenses.delete, 'function');
    });
  });
  describe('Getting an attached receipt', function() {
    it('should implement the getReceipt method', function() {
      assert.equal(typeof Expenses.getReceipt, 'function');
    });
  });
  describe('Attaching a receipt to an expense', function() {
    it('should implement the attachReceipt method', function() {
      assert.equal(typeof Expenses.attachReceipt, 'function');
    });
  });
});
