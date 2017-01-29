'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  ClientContacts = harvest.ClientContacts;

describe('The ClientContacts API', function() {
  describe('Get all client contacts for an account', function() {
    it('should implement the list method', function() {
      assert.equal(typeof ClientContacts.list, 'function');
    });
  });
  describe('Get all client contacts for a client', function() {
    it('should implement the listByClient method', function() {
      assert.equal(typeof ClientContacts.listByClient, 'function');
    });
  });
  describe('Get a client contact', function() {
    it('should implement the get method', function() {
      assert.equal(typeof ClientContacts.get, 'function');
    });
  });
  describe('Create a new client contact', function() {
    it('should implement the create method', function() {
      assert.equal(typeof ClientContacts.create, 'function');
    });
  });
  describe('Update client contact', function() {
    it('should implement the update method', function() {
      assert.equal(typeof ClientContacts.update, 'function');
    });
  });
  describe('Delete a client contact', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof ClientContacts.delete, 'function');
    });
  });
});
