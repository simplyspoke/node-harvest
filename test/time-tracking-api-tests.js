var assert = require('assert'),
    config = require('config'),
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
            assert.equal(typeof TimeTracking.daily, "function");
        });
        it('should return a list of tasks that occured that day', function(done) {
            TimeTracking.daily({}, function(err, tasks) {
                assert(!err, err);
                assert.equal(typeof tasks, "object");
                assert.equal(typeof tasks.daily, "object");
                assert(Array.isArray(tasks.daily.for_day));
                assert.equal(typeof tasks.daily.for_day[0], "object");
                assert(Array.isArray(tasks.daily.day_entries));
                assert.equal(typeof tasks.daily.day_entries[0], "object");
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].id));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].spent_at));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].user_id));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].client));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].project_id));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].project));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].task_id));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].task));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].hours));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].hours_without_timer));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].notes));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].created_at));
                assert(Array.isArray(tasks.daily.day_entries[0].day_entry[0].updated_at));
                assert(Array.isArray(tasks.daily.projects));
                assert.equal(typeof tasks.daily.projects[0], "object");
                assert(Array.isArray(tasks.daily.projects[0].project));
                assert.equal(typeof tasks.daily.projects[0].project[0], "object");
                assert(Array.isArray(tasks.daily.projects[0].project[0].name));
                assert(Array.isArray(tasks.daily.projects[0].project[0].code));
                assert(Array.isArray(tasks.daily.projects[0].project[0].id));
                assert(Array.isArray(tasks.daily.projects[0].project[0].client));
                assert(Array.isArray(tasks.daily.projects[0].project[0].client_id));
                assert(Array.isArray(tasks.daily.projects[0].project[0].client_currency));
                assert(Array.isArray(tasks.daily.projects[0].project[0].client_currency_symbol));
                assert(Array.isArray(tasks.daily.projects[0].project[0].tasks));
                assert(Array.isArray(tasks.daily.projects[0].project[0].tasks));
                assert.equal(typeof tasks.daily.projects[0].project[0].tasks[0], "object");
                assert(Array.isArray(tasks.daily.projects[0].project[0].tasks[0].task));
                assert.equal(typeof tasks.daily.projects[0].project[0].tasks[0].task[0], "object");
                assert(Array.isArray(tasks.daily.projects[0].project[0].tasks[0].task[0].name));
                assert(Array.isArray(tasks.daily.projects[0].project[0].tasks[0].task[0].id));
                assert(Array.isArray(tasks.daily.projects[0].project[0].tasks[0].task[0].billable));
                done();
            });
        });
    });
    describe('Retrieving a single entry', function() {
        it('should implement the get method', function() {
            assert.equal(typeof TimeTracking.get, "function");
        });
    });
    describe('Toggling a timer', function() {
        it('should implement the toggleTimer method', function() {
            assert.equal(typeof TimeTracking.toggleTimer, "function");
        });
    });
    describe('Creating an entry', function() {
        it('should implement the create method', function() {
            assert.equal(typeof TimeTracking.create, "function");
        });
    });
    describe('Deleting an entry', function() {
        it('should implement the delete method', function() {
            assert.equal(typeof TimeTracking.delete, "function");
        });
    });
    describe('Updating an entry', function() {
        it('should implement the update method', function() {
            assert.equal(typeof TimeTracking.update, "function");
        });
    });
});