'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});
const TaskAssignment = harvest.TaskAssignment;

describe('The TaskAssignment API', function() {
  describe('Get all tasks assigned to a given project', function() {
    it('should implement the listByProject method', function() {
      assert.equal(typeof TaskAssignment.listByProject, 'function');
    });
  });
  describe('Get a task assignment', function() {
    it('should implement the get method', function() {
      assert.equal(typeof TaskAssignment.get, 'function');
    });
  });
  describe('Assign a task to a project', function() {
    it('should implement the assign method', function() {
      assert.equal(typeof TaskAssignment.assign, 'function');
    });
  });
  describe('Create a new task and assign it to a project', function() {
    it('should implement the create method', function() {
      assert.equal(typeof TaskAssignment.create, 'function');
    });
  });
  describe('Changing a task inside a project', function() {
    it('should implement the update method', function() {
      assert.equal(typeof TaskAssignment.update, 'function');
    });
  });
  describe('Remove a task from a project', function() {
    it('should implement the remove method', function() {
      assert.equal(typeof TaskAssignment.remove, 'function');
    });
  });
});
