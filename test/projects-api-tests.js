'use strict';

const assert = require('assert');
const common = require('./common');
const helpers = require('../lib/helpers');

const harvest = common.harvest;

const random = parseInt(Math.random() * 10000, 10);
const TEST_CLIENT_NAME = '__NODE-HARVEST__TESTS__CLIENT__' + random;
const TEST_PROJECT_NAME = '__NODE-HARVEST__TESTS__PROJECT__' + random;

let TEST_CLIENT_ID;
let TEST_PROJECT_ID;

describe('The Projects API', function() {
  before(function(done) {
    seedHarvest(done);
  });

  after(function(done) {
    cleanupHarvest(done);
  });

  describe('Create a new project', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.projects.create, 'function');
    });
    it('should create a project', function(done) {
      harvest.projects.create({
        'project': {
          'client_id': TEST_CLIENT_ID,
          'name': TEST_PROJECT_NAME,
          'active': true
        }
      }, function(err, res, project) {
        if (err) {
          assert(!err, 'There should not be and error of ' + err.message);
        }
        TEST_PROJECT_ID = helpers.getId(res);
        assert.equal(typeof TEST_PROJECT_ID, 'number', 'The location header should contain a id');
        done();
      });
    });
  });
  describe('Get a project', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.projects.get, 'function');
    });
    it('should return projects', function(done) {
      harvest.projects.get(TEST_PROJECT_ID, function(err, res, project) {
        assert(!err, err);
        assert.equal(typeof project.project, 'object');
        done();
      });
    });
  });
  describe('Update existing project', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.projects.update, 'function');
    });
  });
  describe('Show all projects', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.projects.list, 'function');
    });
    it('should return projects', function(done) {
      harvest.projects.list({}, function(err, res, projects) {
        console.log(err, res.body, projects);
        assert(!err);
        assert(Array.isArray(projects));
        done();
      });
    });
  });
  describe('(De)Activate an existing project', function() {
    it('should implement the toggle method', function() {
      assert.equal(typeof harvest.projects.toggle, 'function');
    });
    it('should return an error when missing valid ids', function() {
      harvest.projects.toggle(null, function(err, res, entries) {
        assert(err.message === 'toggling activation on a project requires an id');
      });
    });
    it('should work properly', function(done) {
      harvest.projects.toggle(TEST_PROJECT_ID, function(err, res, results) {
        assert(!err);
        harvest.projects.toggle(TEST_PROJECT_ID, function(err, res, results) {
          done();
        });
      });
    });
  });
  describe('Delete a project', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.projects.delete, 'function');
    });
    it('should delete a project', function(done) {
       harvest.projects.delete(TEST_PROJECT_ID, function() {
         done();
       });
    });
  });
});

function seedHarvest(done) {
  harvest.clients.create({
    'client': {
      'name': TEST_CLIENT_NAME,
      'active': true,
      'currency': 'United States Dollar - USD',
      'currency_symbol': '$',
      'details': '123 Main St\r\nAnytown, NY 12345'
    }
  }, function(err, res, body) {
    TEST_CLIENT_ID = helpers.getId(res);
    done();
  });
}

function cleanupHarvest(done) {
  harvest.clients.delete(TEST_CLIENT_ID, function() {
    done();
  });
}
