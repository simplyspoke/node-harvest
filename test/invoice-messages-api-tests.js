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
  });
  describe('Send an invoice', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.invoiceMessages.create, 'function');
    });
  });
  describe('Delete an existing message', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.invoiceMessages.delete, 'function');
    });
  });
  describe('Create a message for marking an invoice as sent', function() {
    it('should implement the markSent method', function() {
      assert.equal(typeof harvest.invoiceMessages.markSent, 'function');
    });
  });
  describe('Create a message and mark an open invoice as closed', function() {
    it('should implement the markClosed method', function() {
      assert.equal(typeof harvest.invoiceMessages.markClosed, 'function');
    });
  });
  describe('Create a message and mark a closed invoice as open', function() {
    it('should implement the markOpen method', function() {
      assert.equal(typeof harvest.invoiceMessages.markOpen, 'function');
    });
  });
  describe('Create a message for marking an open invoice as draft', function() {
    it('should implement the markDraft method', function() {
      assert.equal(typeof harvest.invoiceMessages.markDraft, 'function');
    });
  });
});
