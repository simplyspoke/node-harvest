'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  Tasks = harvest.Tasks;

describe('The Tasks API', function() {
  describe('Show all tasks', function() {
    it('should implement the list method', function() {
      assert.equal(typeof Tasks.list, 'function');
    });
  });
  describe('Get a task', function() {
    it('should implement the get method', function() {
      assert.equal(typeof Tasks.get, 'function');
    });
  });
  describe('Create a new task', function() {
    it('should implement the create method', function() {
      assert.equal(typeof Tasks.create, 'function');
    });
  });
  describe('Update existing task', function() {
    it('should implement the update method', function() {
      assert.equal(typeof Tasks.update, 'function');
    });
  });
  describe('Activate an existing task', function() {
    it('should implement the activate method', function() {
      assert.equal(typeof Tasks.activate, 'function');
    });
  });
  describe('Delete a task', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof Tasks.delete, 'function');
    });
  });
});
