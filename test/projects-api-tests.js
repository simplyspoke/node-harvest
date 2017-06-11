'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

let TEST_ID = 12958436;

describe('The Projects API', function() {
  describe('Show all projects', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.projects.list, 'function');
    });
    it('should return projects', function(done) {
      harvest.projects.list({}, function(err, res, projects) {
        assert(!err, err);
        assert(Array.isArray(projects));
        assert.equal(typeof projects[0], 'object');
        done();
      });
    });
  });
  describe('Get a project', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.projects.get, 'function');
    });
    it('should return projects', function(done) {
      harvest.projects.list({}, function(err, res, projects) {
        let project_id = projects[0].project.id;
        harvest.projects.get(project_id, function(err, res, project) {
          assert(!err, err);
          assert.equal(typeof project.project, 'object');
          done();
        });
      });

    });
  });
  describe('Create a new project', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.projects.create, 'function');
    });
  });
  describe('Update existing project', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.projects.update, 'function');
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
      harvest.projects.toggle(TEST_ID, function(err, res, results) {
        assert(!err);
        harvest.projects.toggle(TEST_ID, function(err, res, results) {
          done();
        });
      });
    });
  });
  describe('Delete a project', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.projects.delete, 'function');
    });
  });
});
