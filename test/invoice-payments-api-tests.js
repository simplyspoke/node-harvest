'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

let testPayment = {
  'payment': {
    'amount': 0,
    'paid_at': '2017-04-24T00:00:00Z',
    'notes': 'Payment notes.'
  }
};

describe('The InvoicePayments API', function() {
  describe('Show all recorded payments for an invoice', function() {
    it('should implement the list method', function() {
      assert.equal(typeof harvest.invoicePayments.list, 'function');
    });
  });
  describe('Show a particular payment', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.invoicePayments.get, 'function');
    });
  });
  describe('Create a new payment', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.invoicePayments.create, 'function');
    });
    it('should work properly', function(done) {
      harvest.invoicePayments.create(11783631, testPayment, function(err, res, results) {
        assert(!err);
        done();
      });
    });
  });
  describe('Delete an existing payment', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.invoicePayments.delete, 'function');
    });
  });
});
