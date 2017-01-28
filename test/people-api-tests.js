var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: config.harvest.subdomain,
    email: config.harvest.email,
    password: config.harvest.password
  }),
  People = harvest.People;

describe('The People API', function() {
  describe('Show all people', function() {
    it('should implement the list method', function() {
      assert.equal(typeof People.list, 'function');
    });
  });
  describe('Get a person', function() {
    it('should implement the get method', function() {
      assert.equal(typeof People.get, 'function');
    });
  });
  describe('Create a new person', function() {
    it('should implement the create method', function() {
      assert.equal(typeof People.create, 'function');
    });
  });
  describe('Update existing person', function() {
    it('should implement the update method', function() {
      assert.equal(typeof People.update, 'function');
    });
  });
  describe('toggle an existing person', function() {
    it('should implement the toggle method', function() {
      assert.equal(typeof People.toggle, 'function');
    });
  });
  describe('Delete a person', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof People.delete, 'function');
    });
  });
  describe('Reset a persons password', function() {
    it('should implement the reset method', function() {
      assert.equal(typeof People.reset, 'function');
    });
  });
});
