'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});
const InvoicePayments = harvest.InvoicePayments;

describe('The InvoicePayments API', function() {
  describe('Show all recorded payments for an invoice', function() {
    it('should implement the paymentsByInvoice method', function() {
      assert.equal(typeof InvoicePayments.paymentsByInvoice, 'function');
    });
  });
  describe('Show a particular payment', function() {
    it('should implement the getByInvoice method', function() {
      assert.equal(typeof InvoicePayments.getByInvoice, 'function');
    });
  });
  describe('Create a new payment', function() {
    it('should implement the create method', function() {
      assert.equal(typeof InvoicePayments.create, 'function');
    });
  });
  describe('Delete an existing payment', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof InvoicePayments.delete, 'function');
    });
  });
});
