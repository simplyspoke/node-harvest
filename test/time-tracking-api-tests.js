'use strict';

const assert = require('assert');
const common = require('./common');

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

  describe('Retrieving entries and projects/tasks for a day', function() {
    it('should implement the daily method', function() {
      assert.equal(typeof harvest.timeTracking.daily, 'function');
    });
    it('should return a list of timers that occured today', function(done) {
      harvest.timeTracking.daily({}, function(err, timers) {
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
        date: new Date('11/16/2012')
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
        done();
      });
    });
  });
  describe('Retrieving a single entry', function() {
    it('should implement the get method', function() {
      assert.equal(typeof harvest.timeTracking.get, 'function');
    });
    it('should return an individual timer', function(done) {
      harvest.timeTracking.get({
        id: TEST_TIMER_ID
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
      assert.equal(typeof harvest.timeTracking.toggleTimer, 'function');
    });
    it('should toggle a timer on and off', function(done) {
      harvest.timeTracking.toggleTimer({
        id: TEST_TIMER_ID
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

        harvest.timeTracking.toggleTimer({
          id: TEST_TIMER_ID
        }, function(err, timer) {
          done();
        });
      });
    });
  });
  describe('Creating an entry', function() {
    it('should implement the create method', function() {
      assert.equal(typeof harvest.timeTracking.create, 'function');
    });
    it('should allow the creation of new time entries', function(done) {
      harvest.timeTracking.create({
        notes: 'This is a test time entry for the node-harvest client',
        hours: 3,
        project_id: TEST_PROJECT_ID,
        task_id: TEST_TASK_ID,
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

        let entry_id = timer.id;

        harvest.timeTracking.delete({
          id: entry_id
        }, function(err, res) {
          done();
        });

      });
    });
  });
  describe('Deleting an entry', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof harvest.timeTracking.delete, 'function');
    });
    it('should allow the deletion of a time entry', function(done) {
      harvest.timeTracking.create({
        notes: 'This is a test time entry for the node-harvest client',
        hours: 3,
        project_id: TEST_PROJECT_ID,
        task_id: TEST_TASK_ID,
        spent_at: 'Sat, 17 Nov 2012'
      }, function(err, timer) {
        let entry_id = timer.id;

        harvest.timeTracking.delete({
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
      assert.equal(typeof harvest.timeTracking.update, 'function');
    });
    it('should allow the updating of time entries', function(done) {
      harvest.timeTracking.create({
        notes: 'Boring new text',
        hours: 2,
        project_id: TEST_PROJECT_ID,
        task_id: TEST_TASK_ID,
        spent_at: 'Sun, 18 Nov 2012'
      }, function(err, new_entry) {
        let entry_id = new_entry.id;
        harvest.timeTracking.update({
          id: entry_id,
          notes: 'This is a test time entry for the node-harvest client',
          hours: 3,
          project_id: TEST_PROJECT_ID,
          task_id: TEST_TASK_ID,
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

          harvest.timeTracking.delete({
            id: entry_id
          }, function(err) {
            done();
          });
        });
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
  }, function(err, response, res) {
    if (err) console.log('Clients', err)
    console.log('res', res);
    harvest.clients.list({}, function(err, clients) {
      for (let i = 0; i < clients.length; ++i) {
        if (clients[i].client.name === TEST_CLIENT_NAME) {
          TEST_CLIENT_ID = clients[i].client.id;
          break;
        }
      }
      harvest.projects.create({
        'project': {
          'client_id': TEST_CLIENT_ID,
          'name': TEST_PROJECT_NAME,
          'active': true
        }
      }, function(err, response, res) {
        if (err) console.log('Projects', err)
        console.log('res', res);
        harvest.projects.list({}, function(err, projects) {
          for (let i = 0; i < projects.length; ++i) {
            if (projects[i].project.name === TEST_PROJECT_NAME) {
              TEST_PROJECT_ID = projects[i].project.id;
              break;
            }
          }
          harvest.tasks.create({
            'task': {
              'name': TEST_TASK_NAME,
              'billable_by_default': false,
              'is_default': true,
              'default_hourly_rate': 100,
              'deactivated': true
            }
          }, function(err, response, res) {
            if (err) console.log('Tasks', err)
            console.log('res', res);
            harvest.tasks.list({}, function(err, tasks) {
              for (let i = 0; i < tasks.length; ++i) {
                if (tasks[i].task.name === TEST_TASK_NAME) {
                  TEST_TASK_ID = tasks[i].task.id;
                  break;
                }
              }
              harvest.taskAssignment.assign({
                project_id: TEST_PROJECT_ID,
                task: {
                  id: TEST_TASK_ID
                }
              }, function(err, response, res) {
                if (err) console.log('TaskAssignment', err)
                console.log('res', res);
                harvest.timeTracking.create({
                  notes: 'Boring new text',
                  hours: 2,
                  project_id: TEST_PROJECT_ID,
                  task_id: TEST_TASK_ID,
                  spent_at: 'Thu, 16 Nov 2012'
                }, function(err, response, res) {
                  if (err) console.log('TimeTracking', err)
                  console.log('res', res);
                  harvest.timeTracking.daily({
                    date: new Date('11/16/2012')
                  }, function(err, entries) {
                    for (let i = 0; i < entries.day_entries.length; ++i) {
                      if (entries.day_entries[i].task === TEST_TASK_NAME) {
                        TEST_TIMER_ID = entries.day_entries[i].id;
                        break;
                      }
                    }
                    done();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function cleanupHarvest(done) {
  harvest.timeTracking.delete({
    'id': TEST_TIMER_ID
  }, function(err, response, res) {
    if (err) console.log('TimeTracking', err)
    harvest.tasks.delete({
      'id': TEST_TASK_ID
    }, function(err, response, res) {
      if (err) console.log('Tasks', err)
      harvest.projects.delete({
        'id': TEST_PROJECT_ID
      }, function(err, response, res) {
        if (err) console.log('Projects', err)
        harvest.clients.delete({
          'id': TEST_CLIENT_ID
        }, function(err, response, res) {
          if (err) console.log('Clients', err)
          done();
        });
      });
    });
  });
}
