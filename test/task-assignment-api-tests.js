'use strict';

const assert = require('assert');
const common = require('./common');
const helpers = require('../lib/helpers');

const harvest = common.harvest;

const random = parseInt(Math.random() * 10000, 10);
const TEST_CLIENT_NAME2 = '__NODE-HARVEST__TESTS__CLIENT__' + random;
const TEST_PROJECT_NAME2 = '__NODE-HARVEST__TESTS__PROJECT__' + random;
const TEST_TASK_NAME2 = '__NODE-HARVEST__TESTS__TASK__' + random;

let TEST_CLIENT_ID2;
let TEST_PROJECT_ID2;
let TEST_TASK_ID2;
let TEST_TIMER_ID2;

let testTask = {
  'task': {
    'ID2': TEST_TASK_ID2
  }
};

let testTask2 = {
  'task': {
    'NAME2': 'TEST_TASK_ID2'
  }
};

describe('The TaskAssignment API', function() {
  before(function(done) {
    seedHarvest(done);
  });

  after(function(done) {
    cleanupHarvest(done);
  });
  describe('Get all taskAssignment assigned to a given project', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.taskAssignment.list, 'function');
    });
    it('should return an array of taskAssignment', function(done) {
      harvest.taskAssignment.list(TEST_PROJECT_ID2, function(err, res, results) {
        assert(typeof results, 'array');
        done();
      });
    });
  });
  describe('Get a task assignment', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.taskAssignment.get, 'function');
    });
    it('should return a task', function(done) {
      harvest.taskAssignment.get(TEST_PROJECT_ID2, TEST_TASK_ID2, function(err, res, results) {
        assert(typeof results, 'array');
        done();
      });
    });
  });
  describe('Assign a task to a project', function() {
    it('should implement the assign method', function() {
      assert.equal(typeof harvest.taskAssignment.assign, 'function');
    });
    it('should return an error when missing valid ids', function() {
      harvest.taskAssignment.assign(null, null, function(err, res, entries) {
        assert(err.message === 'assigning a task assignment requires an id');
      });
    });
    it('should assign a task', function(done) {
      harvest.taskAssignment.assign(TEST_PROJECT_ID2, testTask, function(err, res, entries) {
        assert(!err);
        done();
      });
    });
  });
  describe('Changing a task inside a project', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.taskAssignment.create, 'function');
    });
    it('should return an error when missing valid ids', function() {
      harvest.taskAssignment.create(null, null, function(err, res, entries) {
        assert(err.message === 'assigning a task assignment requires an id');
      });
    });
    it('should create and assign a task', function(done) {
      harvest.taskAssignment.create(TEST_PROJECT_ID2, testTask2, function(err, res, entries) {
        assert(!err);
        done();
      });
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



function seedHarvest(done) {
  harvest.clients.create({
    'client': {
      'name': TEST_CLIENT_NAME2,
      'active': true,
      'currency': 'United States Dollar - USD',
      'currency_symbol': '$',
      'details': '123 Main St\r\nAnytown, NY 12345'
    }
  }, function(err, res, body) {
    TEST_CLIENT_ID2 = helpers.getId(res);
    harvest.projects.create({
      'project': {
        'client_id': TEST_CLIENT_ID2,
        'name': TEST_PROJECT_NAME2,
        'active': true
      }
    }, function(err, res, body) {
      TEST_PROJECT_ID2 = helpers.getId(res);
      harvest.tasks.create({
        'task': {
          'name': TEST_TASK_NAME2,
          'billable_by_default': false,
          'is_default': true,
          'default_hourly_rate': 100,
          'deactivated': true
        }
      }, function(err, res, body) {
        TEST_TASK_ID2 = helpers.getId(res);
        harvest.taskAssignment.assign(TEST_PROJECT_ID2, {
          task: {
            id: TEST_TASK_ID2
          }
        }, function(err, res, body) {
          done();
        });
      });
    });
  });
}

function cleanupHarvest(done) {
  harvest.tasks.delete(TEST_TASK_ID2, function() {
    harvest.projects.delete(TEST_PROJECT_ID2, function() {
      harvest.clients.delete(TEST_CLIENT_ID2, function() {
        done();
      });
    });
  });
}
