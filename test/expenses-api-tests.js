var assert = require('assert'),
    config = require('config'),
    Harvest = require('../index'),
    harvest = new Harvest({
        subdomain: config.harvest.subdomain,
        email: config.harvest.email,
        password: config.harvest.password
    }),
    Expenses = harvest.Expenses;

describe('The Expenses API', function() {
    describe('Show all expense categories', function() {
        it('should implement the list method', function() {
            assert.equal(typeof Expenses.list, "function");
        });
    });
    describe('Get an expense category', function() {
        it('should implement the get method', function() {
            assert.equal(typeof Expenses.get, "function");
        });
    });
    describe('Create a new expense category', function() {
        it('should implement the create method', function() {
            assert.equal(typeof Expenses.create, "function");
        });
    });
    describe('Update existing expense category', function() {
        it('should implement the update method', function() {
            assert.equal(typeof Expenses.update, "function");
        });
    });
    describe('toggle an existing expense category', function() {
        it('should implement the toggle method', function() {
            assert.equal(typeof Expenses.toggle, "function");
        });
    });
    describe('Delete an expense category', function() {
        it('should implement the delete method', function() {
            assert.equal(typeof Expenses.delete, "function");
        });
    });
});