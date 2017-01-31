'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});

describe('The People API', function() {
  describe('Show all people', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.people.list, 'function');
    });
  });
  describe('Get a person', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.people.get, 'function');
    });
  });
  describe('Create a new person', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.people.create, 'function');
    });
  });
  describe('Update existing person', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.people.update, 'function');
    });
  });
  describe('toggle an existing person', function() {
    it('should implement the toggle method', function() {
      assert.equal(typeof harvest.people.toggle, 'function');
    });
  });
  describe('Delete a person', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.people.delete, 'function');
    });
  });
  describe('Reset a persons password', function() {
    it('should implement the reset method', function() {
      assert.equal(typeof harvest.people.reset, 'function');
    });
  });
});
