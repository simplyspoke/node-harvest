'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  UserAssignment = harvest.UserAssignment;

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
