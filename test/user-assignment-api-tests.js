'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

describe('The UserAssignment API', function() {
  describe('Get all users assigned to a given project', function() {
    it('should implement the listByProject method', function() {
      assert.equal(typeof harvest.userAssignment.listByProject, 'function');
    });
  });
  describe('Get a user assignment', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.userAssignment.get, 'function');
    });
  });
  describe('Assign a user to a project', function() {
    it('should implement the assign method', function() {
      assert.equal(typeof harvest.userAssignment.assign, 'function');
    });
  });
  describe('Changing a user inside a project', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.userAssignment.update, 'function');
    });
  });
  describe('Remove a user from a project', function() {
    it('should implement the remove method', function() {
      assert.equal(typeof harvest.userAssignment.remove, 'function');
    });
  });
});
