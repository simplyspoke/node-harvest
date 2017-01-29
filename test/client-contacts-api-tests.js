'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});
const ClientContacts = harvest.ClientContacts;

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
