'use strict';

var assert = require('assert'),
  config = require('config'),
  util = require('util'),
  Harvest = require('../index'),
  harvest = new Harvest({
    subdomain: config.harvest.subdomain,
    email: config.harvest.email,
    password: config.harvest.password
  }),
  TimeTracking = harvest.TimeTracking;

describe('The TimeTracking API', function() {
  describe('Retrieving entries and projects/tasks for a day', function() {
    it('should implement the daily method', function() {
      assert.equal(typeof TimeTracking.daily, 'function');
    });
    it('should return a list of timers that occured today', function(done) {
      TimeTracking.daily({}, function(err, timers) {
        assert(!err, err);
        assert.equal(typeof timers, 'object');
        assert(Array.isArray(timers.day_entries));
        assert(Array.isArray(timers.projects));
        assert.equal(typeof timers.projects[0], 'object');
        assert.equal(typeof timers.projects[0].name, 'string');
        assert.equal(typeof timers.projects[0].code, 'string');
        assert.equal(typeof timers.projects[0].id, 'number');
        assert.equal(typeof timers.projects[0].client, 'string');
        assert.equal(typeof timers.projects[0].client_id, 'number');
        assert.equal(typeof timers.projects[0].client_currency, 'string');
        assert.equal(typeof timers.projects[0].client_currency_symbol, 'string');
        assert(Array.isArray(timers.projects[0].tasks));
        assert.equal(typeof timers.projects[0].tasks[0], 'object');
        assert.equal(typeof timers.projects[0].tasks[0].name, 'string');
        assert.equal(typeof timers.projects[0].tasks[0].id, 'number');
        assert.equal(typeof timers.projects[0].tasks[0].billable, 'boolean');
        done();
      });
    });
    it('should return a list of timers that occured on a specific day', function(done) {
      // assuming there was an entry that day
      TimeTracking.create({
        notes: 'Boring new text',
        hours: 2,
        project_id: '2837810',
        task_id: '1711152',
        spent_at: 'Thu, 15 Nov 2012'
      }, function(err, new_entry) {
        var entry_id = new_entry.id;

        TimeTracking.daily({
          date: new Date('11/15/2012')
        }, function(err, timers) {
          assert(!err, err);
          assert.equal(typeof timers, 'object');
          assert(Array.isArray(timers.day_entries));
          assert.equal(typeof timers.day_entries[0], 'object');
          assert.equal(typeof timers.day_entries[0].id, 'number');
          assert.equal(typeof timers.day_entries[0].spent_at, 'string');
          assert.equal(typeof timers.day_entries[0].user_id, 'number');
          assert.equal(typeof timers.day_entries[0].client, 'string');
          assert.equal(typeof timers.day_entries[0].project_id, 'string');
          assert.equal(typeof timers.day_entries[0].project, 'string');
          assert.equal(typeof timers.day_entries[0].task_id, 'string');
          assert.equal(typeof timers.day_entries[0].task, 'string');
          assert.equal(typeof timers.day_entries[0].hours, 'number');
          assert.equal(typeof timers.day_entries[0].hours_without_timer, 'number');
          assert.equal(typeof timers.day_entries[0].notes, 'string');
          assert.equal(typeof timers.day_entries[0].created_at, 'string');
          assert.equal(typeof timers.day_entries[0].updated_at, 'string');
          assert(Array.isArray(timers.projects));
          assert.equal(typeof timers.projects[0], 'object');
          assert.equal(typeof timers.projects[0].name, 'string');
          assert.equal(typeof timers.projects[0].code, 'string');
          assert.equal(typeof timers.projects[0].id, 'number');
          assert.equal(typeof timers.projects[0].client, 'string');
          assert.equal(typeof timers.projects[0].client_id, 'number');
          assert.equal(typeof timers.projects[0].client_currency, 'string');
          assert.equal(typeof timers.projects[0].client_currency_symbol, 'string');
          assert(Array.isArray(timers.projects[0].tasks));
          assert.equal(typeof timers.projects[0].tasks[0], 'object');
          assert.equal(typeof timers.projects[0].tasks[0].name, 'string');
          assert.equal(typeof timers.projects[0].tasks[0].id, 'number');
          assert.equal(typeof timers.projects[0].tasks[0].billable, 'boolean');

          TimeTracking.delete({
            id: entry_id
          }, function(err) {
            done();
          });

        });
      });
    });
  });
  describe('Retrieving a single entry', function() {
    it('should implement the get method', function() {
      assert.equal(typeof TimeTracking.get, 'function');
    });
    it('should return an individual timer', function(done) {
      TimeTracking.get({
        id: '118593641'
      }, function(err, timer) {
        assert(!err);
        assert.equal(typeof timer, 'object');
        assert.equal(typeof timer.id, 'number');
        assert.equal(typeof timer.spent_at, 'string');
        assert.equal(typeof timer.user_id, 'number');
        assert.equal(typeof timer.client, 'string');
        assert.equal(typeof timer.project_id, 'string');
        assert.equal(typeof timer.project, 'string');
        assert.equal(typeof timer.task_id, 'string');
        assert.equal(typeof timer.task, 'string');
        assert.equal(typeof timer.hours, 'number');
        assert.equal(typeof timer.hours_without_timer, 'number');
        assert.equal(typeof timer.notes, 'string');
        assert.equal(typeof timer.created_at, 'string');
        assert.equal(typeof timer.updated_at, 'string');
        done();
      });
    });
  });
  describe('Toggling a timer', function() {
    it('should implement the toggleTimer method', function() {
      assert.equal(typeof TimeTracking.toggleTimer, 'function');
    });
    it('should toggle a timer on and off', function(done) {
      TimeTracking.toggleTimer({
        id: '118593641'
      }, function(err, timer) {
        assert(!err);
        assert.equal(typeof timer, 'object');
        assert.equal(typeof timer.id, 'number');
        assert.equal(typeof timer.spent_at, 'string');
        assert.equal(typeof timer.user_id, 'number');
        assert.equal(typeof timer.client, 'string');
        assert.equal(typeof timer.project_id, 'string');
        assert.equal(typeof timer.project, 'string');
        assert.equal(typeof timer.task_id, 'string');
        assert.equal(typeof timer.task, 'string');
        assert.equal(typeof timer.hours, 'number');
        assert.equal(typeof timer.hours_without_timer, 'number');
        assert.equal(typeof timer.notes, 'string');
        assert.equal(typeof timer.created_at, 'string');
        assert.equal(typeof timer.updated_at, 'string');

        TimeTracking.toggleTimer({
          id: '118593641'
        }, function(err, timer) {
          done();
        });
      });
    });
  });
  describe('Creating an entry', function() {
    it('should implement the create method', function() {
      assert.equal(typeof TimeTracking.create, 'function');
    });
    it('should allow the creation of new time entries', function(done) {
      TimeTracking.create({
        notes: 'This is a test time entry for the node-harvest client',
        hours: 3,
        project_id: '2837810',
        task_id: '1711152',
        spent_at: 'Sat, 17 Nov 2012'
      }, function(err, timer) {
        assert(!err);
        assert.equal(typeof timer, 'object');
        assert.equal(typeof timer.id, 'number');
        assert.equal(typeof timer.spent_at, 'string');
        assert.equal(typeof timer.user_id, 'number');
        assert.equal(typeof timer.client, 'string');
        assert.equal(typeof timer.project_id, 'string');
        assert.equal(typeof timer.project, 'string');
        assert.equal(typeof timer.task_id, 'string');
        assert.equal(typeof timer.task, 'string');
        assert.equal(typeof timer.hours, 'number');
        assert.equal(typeof timer.hours_without_timer, 'number');
        assert.equal(typeof timer.notes, 'string');
        assert.equal(typeof timer.created_at, 'string');
        assert.equal(typeof timer.updated_at, 'string');

        var entry_id = timer.id;

        TimeTracking.delete({
          id: entry_id
        }, function(err, res) {
          done();
        });

      });
    });
  });
  describe('Deleting an entry', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof TimeTracking.delete, 'function');
    });
    it('should allow the deletion of a time entry', function(done) {
      TimeTracking.create({
        notes: 'This is a test time entry for the node-harvest client',
        hours: 3,
        project_id: '2837810',
        task_id: '1711152',
        spent_at: 'Sat, 17 Nov 2012'
      }, function(err, timer) {
        var entry_id = timer.id;

        TimeTracking.delete({
          id: entry_id
        }, function(err) {
          assert(!err);
          done();
        });
      });
    });
  });
  describe('Updating an entry', function() {
    it('should implement the update method', function() {
      assert.equal(typeof TimeTracking.update, 'function');
    });
    it('should allow the updating of time entries', function(done) {
      TimeTracking.create({
        notes: 'Boring new text',
        hours: 2,
        project_id: '2837810',
        task_id: '1711152',
        spent_at: 'Sun, 18 Nov 2012'
      }, function(err, new_entry) {
        var entry_id = new_entry.id;
        TimeTracking.update({
          id: entry_id,
          notes: 'This is a test time entry for the node-harvest client',
          hours: 3,
          project_id: '2837810',
          task_id: '1711152',
          spent_at: 'Sun, 18 Nov 2012'
        }, function(err, entry) {
          assert(!err);
          assert.equal(typeof entry, 'object');
          assert.equal(typeof entry.id, 'number');
          assert.equal(typeof entry.spent_at, 'string');
          assert.equal(typeof entry.user_id, 'number');
          assert.equal(typeof entry.client, 'string');
          assert.equal(typeof entry.project_id, 'string');
          assert.equal(typeof entry.project, 'string');
          assert.equal(typeof entry.task_id, 'string');
          assert.equal(typeof entry.task, 'string');
          assert.equal(typeof entry.hours, 'number');
          assert.equal(typeof entry.hours_without_timer, 'number');
          assert.equal(typeof entry.notes, 'string');
          assert.equal(typeof entry.created_at, 'string');
          assert.equal(typeof entry.updated_at, 'string');

          TimeTracking.delete({
            id: entry_id
          }, function(err) {
            done();
          });
        });
      });
    });
  });
});
