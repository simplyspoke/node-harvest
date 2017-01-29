'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  InvoiceCategories = harvest.InvoiceCategories;

describe('The InvoiceCategories API', function() {
  describe('Show all recorded categories for an invoice', function() {
    it('should implement the list method', function() {
      assert.equal(typeof InvoiceCategories.list, 'function');
    });
  });
  describe('Update a particular category', function() {
    it('should implement the update method', function() {
      assert.equal(typeof InvoiceCategories.update, 'function');
    });
  });
  describe('Create a new category', function() {
    it('should implement the create method', function() {
      assert.equal(typeof InvoiceCategories.create, 'function');
    });
  });
  describe('Delete an existing category', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof InvoiceCategories.delete, 'function');
    });
  });
});
