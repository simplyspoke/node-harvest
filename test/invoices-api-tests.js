'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  Invoices = harvest.Invoices;

describe('The Invoices API', function() {
  describe('Show recently issued invoices', function() {
    it('should implement the list method', function() {
      assert.equal(typeof Invoices.list, 'function');
    });
  });
  describe('Show a particular invoice', function() {
    it('should implement the get method', function() {
      assert.equal(typeof Invoices.get, 'function');
    });
  });
  describe('Create a new invoice', function() {
    it('should implement the create method', function() {
      assert.equal(typeof Invoices.create, 'function');
    });
  });
  describe('Update existing invoice', function() {
    it('should implement the update method', function() {
      assert.equal(typeof Invoices.update, 'function');
    });
  });
  describe('Delete a invoice', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof Invoices.delete, 'function');
    });
  });
});
