'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  Projects = harvest.Projects;

describe('The Projects API', function() {
  describe('Show all projects', function() {
    it('should implement the list method', function() {
      assert.equal(typeof Projects.list, 'function');
    });
    it('should return projects', function(done) {
      Projects.list({}, function(err, projects) {
        assert(!err, err);
        assert(Array.isArray(projects));
        assert.equal(typeof projects[0], 'object');
        done();
      });
    });
  });
  describe('Get a project', function() {
    it('should implement the get method', function() {
      assert.equal(typeof Projects.get, 'function');
    });
    it('should return projects', function(done) {
      Projects.list({}, function(err, projects) {
        var project_id = projects[0].project.id;
        Projects.get({
          id: project_id
        }, function(err, project) {
          assert(!err, err);
          assert.equal(typeof project.project, 'object');
          done();
        });
      });

    });
  });
  describe('Create a new project', function() {
    it('should implement the create method', function() {
      assert.equal(typeof Projects.create, 'function');
    });
  });
  describe('Update existing project', function() {
    it('should implement the update method', function() {
      assert.equal(typeof Projects.update, 'function');
    });
  });
  describe('(De)Activate an existing project', function() {
    it('should implement the toggleActivation method', function() {
      assert.equal(typeof Projects.toggleActivation, 'function');
    });
  });
  describe('Delete a project', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof Projects.delete, 'function');
    });
  });
});
