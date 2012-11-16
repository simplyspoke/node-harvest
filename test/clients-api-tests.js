var assert = require('assert'),
    config = require('config'),
    Harvest = require('../index'),
    harvest = new Harvest({
        subdomain: config.harvest.subdomain,
        email: config.harvest.email,
        password: config.harvest.password
    }),
    Clients = harvest.Clients;

describe('The Clients API', function() {
    describe('Get all clients', function() {
        it('should implement the list method', function() {
            assert.equal(typeof Clients.list, "function");
        });
    });
    describe('Get a client', function() {
        it('should implement the get method', function() {
            assert.equal(typeof Clients.get, "function");
        });
    });
    describe('Create a new client', function() {
        it('should implement the create method', function() {
            assert.equal(typeof Clients.create, "function");
        });
    });
    describe('Update client', function() {
        it('should implement the update method', function() {
            assert.equal(typeof Clients.update, "function");
        });
    });
    describe('(De)Activate an existing client', function() {
        it('should implement the toggleActivation method', function() {
            assert.equal(typeof Clients.toggleActivation, "function");
        });
    });
    describe('Delete a client', function() {
        it('should implement the delete method', function() {
            assert.equal(typeof Clients.delete, "function");
        });
    });
});