'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;
let clients;

describe('The ClientContacts API', function() {
  before(function(done) {
    loadIds(done);
  });
  describe('Get all client contacts for an account', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.clientContacts.list, 'function');
    });
  });
  describe('Get all client contacts for a client', function() {
    it('should implement the listByClient method', function() {
      assert.equal(typeof harvest.clientContacts.listByClient, 'function');
    });
    it('should return an array of contacts', function() {
      harvest.clientContacts.listByClient(clients[0].client.id, function(err, res, contacts) {
        assert(typeof contacts, 'array');
      });
    });
    it('should should return an error when missing valid ids', function() {
      harvest.clientContacts.listByClient(null, function(err, res, entries) {
        assert(err.message === 'retrieving a contacts by client requires a client_id');
      });
    });
  });
  describe('Get a client contact', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.clientContacts.get, 'function');
    });
  });
  describe('Create a new client contact', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.clientContacts.create, 'function');
    });
  });
  describe('Update client contact', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.clientContacts.update, 'function');
    });
  });
  describe('Delete a client contact', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.clientContacts.delete, 'function');
    });
  });
});

function loadIds(done) {
  harvest.clients.list({}, function(err, res, results) {
    clients = results;
    done();
  });
}
