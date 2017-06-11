'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

let TEST_PROJECT_ID = 12958436;
let TEST_USER_ID = 508343;
let TEST_ASSIGNMENT_ID;
let testUser = {
  'user': {
    'id': TEST_USER_ID
  }
};
let testAssignment = {
  'user_assignment': {
    'user_id': 508343,
    'project_id': 5198193,
    'is_project_manager': true,
    'deactivated': false,
    'hourly_rate': 0
  }
};

describe('The UserAssignment API', function() {
  describe('Get all users assigned to a given project', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.userAssignment.list, 'function');
    });
    it('should work properly', function(done) {
      harvest.userAssignment.list(TEST_PROJECT_ID, function(err, res, results) {
        TEST_ASSIGNMENT_ID = results[0].user_assignment.id;
        assert(!err);
        done();
      });
    });
  });
  describe('Get a user assignment', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.userAssignment.get, 'function');
    });
    it('should work properly', function(done) {
      harvest.userAssignment.get(TEST_PROJECT_ID, TEST_ASSIGNMENT_ID, function(err, res, results) {
        assert(!err);
        done();
      });
    });
  });
  describe('Changing a user inside a project', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.userAssignment.update, 'function');
    });
    it('should work properly', function(done) {
      harvest.userAssignment.update(TEST_PROJECT_ID, TEST_ASSIGNMENT_ID, {
        hourly_rate: 20
      }, function(err, res, results) {
        assert(!err);
        done();
      });
    });
  });
  describe('Remove a user from a project', function() {
    it('should implement the remove method', function() {
      assert.equal(typeof harvest.userAssignment.delete, 'function');
    });
    it('should work properly', function(done) {
      harvest.userAssignment.delete(TEST_PROJECT_ID, TEST_ASSIGNMENT_ID, function(err, res, results) {
        assert(!err);
        done();
      });
    });
  });
  describe('Assign a user to a project', function() {
    it('should implement the assign method', function() {
      assert.equal(typeof harvest.userAssignment.assign, 'function');
    });
    it('should should return an error when valid ids', function(done) {
      harvest.userAssignment.assign(null, {}, function(err, res, results) {
        assert(err.message === 'assigning a user assignment requires a project id');
        done();
      });
    });
    it('should work properly', function(done) {
      harvest.userAssignment.assign(TEST_PROJECT_ID, testUser, function(err, res, results) {
        assert(!err);
        done();
      });
    });
  });
});
