'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

describe('The Reports API', function() {
  describe('Get all time entries logged by a user for a given timeframe', function() {
    it('should implement the timeEntriesByCurrentUser method', function() {
      assert.equal(typeof harvest.reports.timeEntriesByUser, 'function');
    });
  });
  describe('Get all expense entries logged by a user for a given timeframe', function() {
    it('should implement the expensesByUser method', function() {
      assert.equal(typeof harvest.reports.expensesByUser, 'function');
    });
  });
  describe('Get all time entries logged to a project for a given timeframe', function() {
    it('should implement the timeEntriesByProject method', function() {
      assert.equal(typeof harvest.reports.timeEntriesByProject, 'function');
    });
  });
  describe('Get all expenses entries to a project for a given timeframe', function() {
    it('should implement the expensesByProject method', function() {
      assert.equal(typeof harvest.reports.expensesByProject, 'function');
    });
  });
});
