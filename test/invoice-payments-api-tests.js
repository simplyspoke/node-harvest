'use strict';

var assert = require('assert'),
  config = require('config'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: process.env.subdomain || config.harvest.subdomain,
    email: process.env.email || config.harvest.email,
    password: process.env.password || config.harvest.password
  }),
  InvoicePayments = harvest.InvoicePayments;

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
