'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  Clients = harvest.Clients;


var TEST_CLIENT_NAME = '__NODE-HARVEST__TESTS__CLIENT__' + parseInt(Math.random() * 10000, 10),
  TEST_CLIENT_ID = null;


describe('The Clients API', function() {
  describe('Create a new client', function() {
    it('should implement the create method', function() {
      assert.equal(typeof Clients.create, 'function');
    });
    it('create method should work properly', function(done) {
      Clients.create({
        'client': {
          'name': TEST_CLIENT_NAME
        }
      }, function(err, data) {
        /* TODO: uncomment when graceful processing for POST requests implemented
        if (err)
            assert.equal(err.message, 'Name has already been taken');
        else
            assert(data); */
        done();
      });
    });
  });
  describe('Get all clients', function() {
    it('should implement the list method', function() {
      assert.equal(typeof Clients.list, 'function');
    });
    it('should provide a list of all clients', function(done) {
      Clients.list({}, function(err, clients) {
        assert(!err);
        var testClient;
        for (var i = 0; i < clients.length; ++i) {
          if (clients[i].client.name === TEST_CLIENT_NAME) {
            testClient = clients[i].client;
            break;
          }
        }
        assert(testClient);
        TEST_CLIENT_ID = testClient.id;
        done();
      });
    });
  });
  describe('Get a client', function() {
    it('should implement the get method', function() {
      assert.equal(typeof Clients.get, 'function');
    });
    it('get method should work properly', function(done) {
      assert(TEST_CLIENT_ID);
      Clients.get({
        'id': TEST_CLIENT_ID
      }, function(err, data) {
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
      assert.equal(typeof Clients.update, 'function');
    });
    it('update method should work properly', function(done) {
      assert(TEST_CLIENT_ID);
      var dets = 'New details: ' + Math.random();

      Clients.update({
        'id': TEST_CLIENT_ID,
        'client': {
          'name': TEST_CLIENT_NAME,
          'details': dets
        }
      }, function(err, data, res) {
        /* TODO: uncomment when graceful processing for PUT requests implemented
          assert(!err); */
        Clients.get({
          'id': TEST_CLIENT_ID
        }, function(err, data) {
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
      assert.equal(typeof Clients.toggleActivation, 'function');
    });
    it('toggleActivation method should work properly', function(done) {
      assert(TEST_CLIENT_ID);
      Clients.toggleActivation({
        id: TEST_CLIENT_ID
      }, function(err, data) {
        /* TODO: uncomment when graceful processing for POST requests implemented
        assert(!err); */
        Clients.get({
          id: TEST_CLIENT_ID
        }, function(err, data) {
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
      assert.equal(typeof Clients.delete, 'function');
    });
    it('delete method should work properly', function(done) {
      assert(TEST_CLIENT_ID);
      Clients.delete({
        id: TEST_CLIENT_ID
      }, function(err, data) {
        assert(!err);
        done();
      });
    });
  });
});
