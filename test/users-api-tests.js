'use strict';

const assert = require('assert');
const common = require('./common');
const helpers = require('../lib/helpers');

const harvest = common.harvest;

let testUser = {
  'user': {
    'email': 'user@example.com',
    'first_name': 'Harvest',
    'last_name': 'User',
    'billable_by_default': false,
    'default_hourly_rate': 100,
    'is_active': true
  }
};
let TEST_USER_ID;

describe('The Users API', function() {
  describe('Show all users', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.users.list, 'function');
    });
    it('should return an array of users', function(done) {
      harvest.users.list({}, function(err, res, results) {
        TEST_USER_ID = results[0].user.id
        assert(typeof results, 'array');
        done();
      });
    });
  });
  describe('Get a user', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.users.get, 'function');
    });
    it('should return a user', function(done) {
      harvest.users.get(TEST_USER_ID, function(err, res, results) {
        assert(typeof results, 'array');
        done();
      });
    });
  });
  describe('Create a new user', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.users.create, 'function');
    });
    // it('should create a new user', function(done) {
    //   harvest.users.create(testUser, function(err, res, results) {
    //     console.log(res.headers, results);
    //     TEST_USER_ID = helpers.getId(res);
    //     assert(!err);
    //     assert(!isNaN(TEST_USER_ID));
    //     done();
    //   });
    // });
  });
  describe('Update existing user', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.users.update, 'function');
    });
    it('should update a user', function(done) {
      testUser.default_hourly_rate = 50;
      harvest.users.update(TEST_USER_ID, testUser, function(err, res, results) {
        assert(!err);
        done();
      });
    });
  });
  describe('toggle an existing user', function() {
    it('should implement the toggle method', function() {
      assert.equal(typeof harvest.users.toggle, 'function');
    });
    it('should return an error when missing valid ids', function() {
      harvest.users.toggle(null, function(err, res, entries) {
        assert(err.message === 'toggling a user requires an id');
      });
    });
    it('should work properly', function(done) {
      harvest.users.toggle(TEST_USER_ID, function(err, res, results) {
        assert(!err);
        harvest.users.toggle(TEST_USER_ID, function(err, res, results) {
          done();
        });
      });
    });
  });
  describe('Delete a user', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.users.delete, 'function');
    });
    // it('should delete a user', function(done) {
    //   harvest.users.delete(TEST_USER_ID, function(err, res, results) {
    //     assert(!err);
    //     done();
    //   });
    // });
  });
});
