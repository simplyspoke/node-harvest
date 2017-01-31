'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

describe('The Tasks API', function() {
  describe('Show all tasks', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.tasks.list, 'function');
    });
  });
  describe('Get a task', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.tasks.get, 'function');
    });
  });
  describe('Create a new task', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.tasks.create, 'function');
    });
  });
  describe('Update existing task', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.tasks.update, 'function');
    });
  });
  describe('Activate an existing task', function() {
    it('should implement the activate method', function() {
      assert.equal(typeof harvest.tasks.activate, 'function');
    });
  });
  describe('Delete a task', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.tasks.delete, 'function');
    });
  });
});
