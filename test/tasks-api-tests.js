'use strict';

const assert = require('assert');
const common = require('./common');
const helpers = require('../lib/helpers');

const harvest = common.harvest;

let testTask = {
  'task': {
    'name': 'TEST_TASK_NAME',
    'billable_by_default': false,
    'is_default': true,
    'default_hourly_rate': 100,
    'deactivated': true
  }
};
let TEST_TASK_ID;

describe('The Tasks API', function() {
  describe('Show all tasks', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.tasks.list, 'function');
    });
    it('should return an array of tasks', function(done) {
      harvest.tasks.list({}, function(err, res, results) {
        TEST_TASK_ID = results[0].task.id;
        assert(typeof results, 'array');
        done();
      });
    });
  });
  describe('Get a task', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.tasks.get, 'function');
    });
    it('should return a task', function(done) {
      harvest.tasks.get(TEST_TASK_ID, function(err, res, results) {
        assert(typeof results, 'array');
        done();
      });
    });
  });
  describe('Create a new task', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.tasks.create, 'function');
    });
    it('should create a new task', function(done) {
      harvest.tasks.create(testTask, function(err, res, results) {
        TEST_TASK_ID = helpers.getId(res);
        assert(!err);
        assert(!isNaN(TEST_TASK_ID));
        done();
      });
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
    it('should return an error when missing valid ids', function() {
      harvest.tasks.activate(null, function(err, res, entries) {
        assert(err.message === 'activating a task requires an id');
      });
    });
    it('toggleActivation method should work properly', function(done) {
      harvest.tasks.activate(TEST_TASK_ID, function(err, res, results) {
        // console.log(res.headers, results);
        assert(!err);
        done();
      });
    });
  });
  describe('Delete a task', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.tasks.delete, 'function');
    });
    it('should delete a task', function(done) {
      harvest.tasks.delete(TEST_TASK_ID, function(err, res, results) {
        assert(!err);
        done();
      });
    });
  });
});
