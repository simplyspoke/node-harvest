'use strict';

const assert = require('assert');
const common = require('./common');
const helpers = require('../lib/helpers');

const harvest = common.harvest;
let clients;

const random = parseInt(Math.random() * 10000, 10);
const TEST_CONTACT_NAME2 = '__NODE-HARVEST__TESTS__CONTACT__' + random;
const TEST_CLIENT_NAME2 = '__NODE-HARVEST__TESTS__CLIENT__' + random;

let TEST_CONTACT_ID2;
let TEST_CLIENT_ID2;

describe('The ClientContacts API', function() {
  before(function(done) {
    seedHarvest(done);
  });

  after(function(done) {
    cleanupHarvest(done);
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
      harvest.clientContacts.listByClient(TEST_CLIENT_ID2, function(err, res, contacts) {
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


function seedHarvest(done) {
  harvest.clients.create({
    'client': {
      'name': TEST_CLIENT_NAME2,
      'active': true,
      'currency': 'United States Dollar - USD',
      'currency_symbol': '$',
      'details': '123 Main St\r\nAnytown, NY 12345'
    }
  }, function(err, res, body) {
    TEST_CLIENT_ID2 = helpers.getId(res);
    harvest.clientContacts.create({
      'contact': {
        'client_id': TEST_CLIENT_ID2,
        'first_name': TEST_CONTACT_NAME2,
        'last_name': TEST_CONTACT_NAME2
      }
    }, function(err, res, body) {
      TEST_CONTACT_ID2 = helpers.getId(res);
      done();
    });
  });
}

function cleanupHarvest(done) {
  harvest.clientContacts.delete(TEST_CONTACT_ID2, function() {
    harvest.clients.delete(TEST_CLIENT_ID2, function() {
      done();
    });
  });
}
