'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});
const UserAssignment = harvest.UserAssignment;

describe('The UserAssignment API', function() {
  describe('Get all users assigned to a given project', function() {
    it('should implement the listByProject method', function() {
      assert.equal(typeof UserAssignment.listByProject, 'function');
    });
  });
  describe('Get a user assignment', function() {
    it('should implement the get method', function() {
      assert.equal(typeof UserAssignment.get, 'function');
    });
  });
  describe('Assign a user to a project', function() {
    it('should implement the assign method', function() {
      assert.equal(typeof UserAssignment.assign, 'function');
    });
  });
  describe('Changing a user inside a project', function() {
    it('should implement the update method', function() {
      assert.equal(typeof UserAssignment.update, 'function');
    });
  });
  describe('Remove a user from a project', function() {
    it('should implement the remove method', function() {
      assert.equal(typeof UserAssignment.remove, 'function');
    });
  });
});
