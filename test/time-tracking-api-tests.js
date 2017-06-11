'use strict';

const assert = require('assert');
const common = require('./common');
const helpers = require('../lib/helpers');

const harvest = common.harvest;

const random = parseInt(Math.random() * 10000, 10);
const TEST_CLIENT_NAME = '__NODE-HARVEST__TESTS__CLIENT__' + random;
const TEST_PROJECT_NAME = '__NODE-HARVEST__TESTS__PROJECT__' + random;
const TEST_TASK_NAME = '__NODE-HARVEST__TESTS__TASK__' + random;

let TEST_CLIENT_ID;
let TEST_PROJECT_ID;
let TEST_TASK_ID;
let TEST_TIMER_ID;

describe('The TimeTracking API', function() {
  before(function(done) {
    seedHarvest(done);
  });

  after(function(done) {
    cleanupHarvest(done);
  });

  describe('Creating an entry', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.timeTracking.create, 'function');
    });
    it('should allow the creation of new time entries', function(done) {
      harvest.timeTracking.create({
        notes: 'Boring new text',
        hours: 2,
        project_id: TEST_PROJECT_ID,
        task_id: TEST_TASK_ID,
        spent_at: '2017-1-18'
      }, function(err, responce, timer) {
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

        TEST_TIMER_ID = timer.id;
        done();
      });
    });
  });
  describe('Retrieving entries and projects/tasks for a day', function() {
    it('should implement the daily method', function() {
      assert.equal(typeof harvest.timeTracking.daily, 'function');
    });
    it('should return a list of timers that occured today', function(done) {
      harvest.timeTracking.daily({}, function(err, responce, timers) {
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
      harvest.timeTracking.daily({
        date: new Date('1/18/2017')
      }, function(err, responce, timers) {
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
        done();
      });
    });
  });
  describe('Retrieving a single entry', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.timeTracking.get, 'function');
    });
    it('should return an error when missing valid ids', function() {
      harvest.timeTracking.get(null, function(err, res, entries) {
        assert(err.message === 'getting daily time requires an id');
      });
    });
    it('should return an individual timer', function(done) {
      harvest.timeTracking.get(TEST_TIMER_ID, function(err, responce, timer) {
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
      assert.equal(typeof harvest.timeTracking.toggleTimer, 'function');
    });
    it('should return an error when missing valid ids', function() {
      harvest.timeTracking.toggleTimer(null, function(err, res, entries) {
        assert(err.message === 'toggling the timer requires an id');
      });
    });
    it('should toggle a timer on and off', function(done) {
      harvest.timeTracking.toggleTimer(TEST_TIMER_ID, function(err, responce, timer) {
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

        harvest.timeTracking.toggleTimer(TEST_TIMER_ID, function(err, responce, timer) {
          done();
        });
      });
    });
  });
  describe('Updating an entry', function() {
    it('should implement the update method', function() {
      assert.equal(typeof harvest.timeTracking.update, 'function');
    });
    it('should return an error when missing valid ids', function() {
      harvest.timeTracking.update(null, {}, function(err, res, entries) {
        assert(err.message === 'updating time requires an id');
      });
    });
    it('should allow the updating of time entries', function(done) {
      harvest.timeTracking.update(TEST_TIMER_ID, {
        notes: 'New description',
        hours: 1,
        project_id: TEST_PROJECT_ID,
        task_id: TEST_TASK_ID
      }, function(err, responce, entry) {
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
        done();
      });
    });
  });
  describe('Deleting an entry', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.timeTracking.delete, 'function');
    });
    it('should return an error when missing valid ids', function() {
      harvest.timeTracking.delete(null, function(err, res, entries) {
        assert(err.message === 'deleting time requires an id');
      });
    });
    it('should allow the deletion of a time entry', function(done) {
      harvest.timeTracking.delete(TEST_TIMER_ID, function(err) {
        assert(!err);
        done();
      });
    });
  });
});

function seedHarvest(done) {
  harvest.clients.create({
    'client': {
      'name': TEST_CLIENT_NAME,
      'active': true,
      'currency': 'United States Dollar - USD',
      'currency_symbol': '$',
      'details': '123 Main St\r\nAnytown, NY 12345'
    }
  }, function(err, res, body) {
    TEST_CLIENT_ID = helpers.getId(res);
    harvest.projects.create({
      'project': {
        'client_id': TEST_CLIENT_ID,
        'name': TEST_PROJECT_NAME,
        'active': true
      }
    }, function(err, res, body) {
      TEST_PROJECT_ID = helpers.getId(res);
      harvest.tasks.create({
        'task': {
          'name': TEST_TASK_NAME,
          'billable_by_default': false,
          'is_default': true,
          'default_hourly_rate': 100,
          'deactivated': true
        }
      }, function(err, res, body) {
        TEST_TASK_ID = helpers.getId(res);
        harvest.taskAssignment.assign(TEST_PROJECT_ID, {
          task: {
            id: TEST_TASK_ID
          }
        }, function(err, res, body) {
          done();
        });
      });
    });
  });
}

function cleanupHarvest(done) {
  harvest.tasks.delete(TEST_TASK_ID, function() {
    harvest.projects.delete(TEST_PROJECT_ID, function() {
      harvest.clients.delete(TEST_CLIENT_ID, function() {
        done();
      });
    });
  });
}
