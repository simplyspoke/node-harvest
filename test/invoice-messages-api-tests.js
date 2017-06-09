'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

describe('The InvoiceMessages API', function() {
  describe('Show all messages sent for an invoice', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.invoiceMessages.list, 'function');
    });
  });
  describe('Show a particular message', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.invoiceMessages.get, 'function');
    });
    it('should should return an error when valid ids', function() {
      harvest.invoiceMessages.get(null, null, {}, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
  });
  describe('Send an invoice', function() {
    it('should implement the send method', function() {
      assert.equal(typeof harvest.invoiceMessages.send, 'function');
    });
    it('should should return an error when valid ids', function() {
      harvest.invoiceMessages.send(null, {}, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
  });
  describe('Delete an existing message', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.invoiceMessages.delete, 'function');
    });
    it('should should return an error when valid ids', function() {
      harvest.invoiceMessages.delete(null, null, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
  });
  describe('Create a message for marking an invoice as sent', function() {
    it('should implement the markSent method', function() {
      assert.equal(typeof harvest.invoiceMessages.mark, 'function');
    });
    it('should should return an error when invalid ids', function() {
      harvest.invoiceMessages.mark(null, null, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
    it('should should return an error missing a status', function() {
      harvest.invoiceMessages.mark(1, null, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
  });
});
