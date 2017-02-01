'use strict';

const assert = require('assert');
const common = require('./common');
const helpers = require('../lib/helpers');

const harvest = common.harvest;

const TEST_CLIENT_NAME = '__NODE-HARVEST__TESTS__CLIENT__' + parseInt(Math.random() * 10000, 10);
let TEST_CLIENT_ID = null;

describe('The Clients API', function() {
  describe('Create a new client', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.clients.create, 'function');
    });
    it('create method should work properly', function(done) {
      harvest.clients.create({
        'client': {
          'name': TEST_CLIENT_NAME
        }
      }, function(err, response) {
        if (err) {
          assert(!err, 'There should not be and error of ' + err.message);
        }
        TEST_CLIENT_ID = helpers.getId(response);
        assert.equal(typeof TEST_CLIENT_ID, 'number', 'The location header should contain a id');
        done();
      });
    });
  });
  describe('Get all clients', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.clients.list, 'function');
    });
    it('should provide a list of all clients', function(done) {
      harvest.clients.list({}, function(err, response, clients) {
        assert(!err);
        assert(Array.isArray(clients));
        done();
      });
    });
  });
  describe('Get a client', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.clients.get, 'function');
    });
    it('get method should work properly', function(done) {
      assert(TEST_CLIENT_ID);
      harvest.clients.get({
        'id': TEST_CLIENT_ID
      }, function(err, response, data) {
        assert(!err);
        assert(data);
        assert(data.client);
        assert.equal(data.client.id, TEST_CLIENT_ID);
        assert.equal(data.client.name, TEST_CLIENT_NAME);
        done();
      });
    });
  });
  describe('Update client', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.clients.update, 'function');
    });
    it('update method should work properly', function(done) {
      assert(TEST_CLIENT_ID);
      let dets = 'New details: ' + Math.random();

      harvest.clients.update({
        'id': TEST_CLIENT_ID,
        'client': {
          'name': TEST_CLIENT_NAME,
          'details': dets
        }
      }, function(err, response, data) {
        /* TODO: uncomment when graceful processing for PUT requests implemented
          assert(!err); */
        harvest.clients.get({
          'id': TEST_CLIENT_ID
        }, function(err, response, data) {
          assert(!err);
          assert(data);
          assert(data.client);
          assert.equal(data.client.id, TEST_CLIENT_ID);
          assert.equal(data.client.name, TEST_CLIENT_NAME);
          assert.equal(data.client.details, dets);
          done();
        });
      });
    });
  });
  describe('(De)Activate an existing client', function() {
    it('should implement the toggleActivation method', function() {
      assert.equal(typeof harvest.clients.toggleActivation, 'function');
    });
    it('toggleActivation method should work properly', function(done) {
      assert(TEST_CLIENT_ID);
      harvest.clients.toggleActivation({
        id: TEST_CLIENT_ID
      }, function(err, response, data) {
        /* TODO: uncomment when graceful processing for POST requests implemented
        assert(!err); */
        harvest.clients.get({
          id: TEST_CLIENT_ID
        }, function(err, response, data) {
          assert(!err);
          assert(data);
          assert(data.client);
          assert(!data.client.active);
          done();
        });
      });
    });
  });
  describe('Delete a client', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.clients.delete, 'function');
    });
    it('delete method should work properly', function(done) {
      assert(TEST_CLIENT_ID);
      harvest.clients.delete({
        id: TEST_CLIENT_ID
      }, function(err, response, data) {
        assert(!err);
        done();
      });
    });
  });
});
