'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});

describe('The TaskAssignment API', function() {
  describe('Get all tasks assigned to a given project', function() {
    it('should implement the listByProject method', function() {
      assert.equal(typeof harvest.taskAssignment.listByProject, 'function');
    });
  });
  describe('Get a task assignment', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.taskAssignment.get, 'function');
    });
  });
  describe('Assign a task to a project', function() {
    it('should implement the assign method', function() {
      assert.equal(typeof harvest.taskAssignment.assign, 'function');
    });
  });
  describe('Create a new task and assign it to a project', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.taskAssignment.create, 'function');
    });
  });
  describe('Changing a task inside a project', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.taskAssignment.update, 'function');
    });
  });
  describe('Remove a task from a project', function() {
    it('should implement the remove method', function() {
      assert.equal(typeof harvest.taskAssignment.remove, 'function');
    });
  });
});
