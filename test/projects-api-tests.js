var assert = require('assert'),
    config = require('config'),
    Harvest = require('../index'),
    harvest = new Harvest({
        subdomain: config.harvest.subdomain,
        email: config.harvest.email,
        password: config.harvest.password
    }),
    Projects = harvest.Projects;

describe('The Projects API', function() {
    describe('Show all projects', function() {
        it('should implement the list method', function() {
            assert.equal(typeof Projects.list, "function");
        });
    });
    describe('Get a project', function() {
        it('should implement the get method', function() {
            assert.equal(typeof Projects.get, "function");
        });
    });
    describe('Create a new project', function() {
        it('should implement the create method', function() {
            assert.equal(typeof Projects.create, "function");
        });
    });
    describe('Update existing project', function() {
        it('should implement the update method', function() {
            assert.equal(typeof Projects.update, "function");
        });
    });
    describe('(De)Activate an existing project', function() {
        it('should implement the toggleActivation method', function() {
            assert.equal(typeof Projects.toggleActivation, "function");
        });
    });
    describe('Delete a project', function() {
        it('should implement the delete method', function() {
            assert.equal(typeof Projects.delete, "function");
        });
    });
});