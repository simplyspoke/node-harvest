'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

describe('The TaskAssignment API', function() {
  describe('Get all tasks assigned to a given project', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.taskAssignment.list, 'function');
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
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.taskAssignment.delete, 'function');
    });
  });
});
