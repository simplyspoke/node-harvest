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
            assert.equal(typeof TimeTracking.daily, "function");
        });
        it('should return a list of timers that occured today', function(done) {
            TimeTracking.daily({}, function(err, timers) {
                assert(!err, err);
                assert.equal(typeof timers, "object");
                assert.equal(typeof timers.daily, "object");
                assert(Array.isArray(timers.daily.for_day));
                assert.equal(typeof timers.daily.for_day[0], "object");
                assert(Array.isArray(timers.daily.day_entries));
                assert.equal(typeof timers.daily.day_entries[0], "object");
                assert(Array.isArray(timers.daily.projects));
                assert.equal(typeof timers.daily.projects[0], "object");
                assert(Array.isArray(timers.daily.projects[0].project));
                assert.equal(typeof timers.daily.projects[0].project[0], "object");
                assert(Array.isArray(timers.daily.projects[0].project[0].name));
                assert(Array.isArray(timers.daily.projects[0].project[0].code));
                assert(Array.isArray(timers.daily.projects[0].project[0].id));
                assert(Array.isArray(timers.daily.projects[0].project[0].client));
                assert(Array.isArray(timers.daily.projects[0].project[0].client_id));
                assert(Array.isArray(timers.daily.projects[0].project[0].client_currency));
                assert(Array.isArray(timers.daily.projects[0].project[0].client_currency_symbol));
                assert(Array.isArray(timers.daily.projects[0].project[0].tasks));
                assert(Array.isArray(timers.daily.projects[0].project[0].tasks));
                assert.equal(typeof timers.daily.projects[0].project[0].tasks[0], "object");
                assert(Array.isArray(timers.daily.projects[0].project[0].tasks[0].task));
                assert.equal(typeof timers.daily.projects[0].project[0].tasks[0].task[0], "object");
                assert(Array.isArray(timers.daily.projects[0].project[0].tasks[0].task[0].name));
                assert(Array.isArray(timers.daily.projects[0].project[0].tasks[0].task[0].id));
                assert(Array.isArray(timers.daily.projects[0].project[0].tasks[0].task[0].billable));
                done();
            });
	});
        it('should return a list of timers that occured on a specific day', function(done) {
	    // assuming there was an entry that day
	    TimeTracking.create({
		notes: "Boring new text",
		hours: 2,
		project_id: '2837810',
		task_id: '1711152',
		spent_at: 'Thu, 15 Nov 2012'
	    }, function(err, new_entry) {
		var entry_id = new_entry.add.day_entry[0].id[0]._;

		TimeTracking.daily({
		    date: new Date('11/15/2012')
		}, function(err, timers) {
                    assert(!err, err);
                    assert.equal(typeof timers, "object");
                    assert.equal(typeof timers.daily, "object");
                    assert(Array.isArray(timers.daily.for_day));
                    assert.equal(typeof timers.daily.for_day[0], "object");
                    assert(Array.isArray(timers.daily.day_entries));
                    assert.equal(typeof timers.daily.day_entries[0], "object");
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].id));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].spent_at));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].user_id));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].client));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].project_id));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].project));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].task_id));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].task));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].hours));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].hours_without_timer));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].notes));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].created_at));
                    assert(Array.isArray(timers.daily.day_entries[0].day_entry[0].updated_at));
                    assert(Array.isArray(timers.daily.projects));
                    assert.equal(typeof timers.daily.projects[0], "object");
                    assert(Array.isArray(timers.daily.projects[0].project));
                    assert.equal(typeof timers.daily.projects[0].project[0], "object");
                    assert(Array.isArray(timers.daily.projects[0].project[0].name));
                    assert(Array.isArray(timers.daily.projects[0].project[0].code));
                    assert(Array.isArray(timers.daily.projects[0].project[0].id));
                    assert(Array.isArray(timers.daily.projects[0].project[0].client));
                    assert(Array.isArray(timers.daily.projects[0].project[0].client_id));
                    assert(Array.isArray(timers.daily.projects[0].project[0].client_currency));
                    assert(Array.isArray(timers.daily.projects[0].project[0].client_currency_symbol));
                    assert(Array.isArray(timers.daily.projects[0].project[0].tasks));
                    assert(Array.isArray(timers.daily.projects[0].project[0].tasks));
                    assert.equal(typeof timers.daily.projects[0].project[0].tasks[0], "object");
                    assert(Array.isArray(timers.daily.projects[0].project[0].tasks[0].task));
                    assert.equal(typeof timers.daily.projects[0].project[0].tasks[0].task[0], "object");
                    assert(Array.isArray(timers.daily.projects[0].project[0].tasks[0].task[0].name));
                    assert(Array.isArray(timers.daily.projects[0].project[0].tasks[0].task[0].id));
                    assert(Array.isArray(timers.daily.projects[0].project[0].tasks[0].task[0].billable));

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
            assert.equal(typeof TimeTracking.get, "function");
        });
        it('should return an individual timer', function(done) {
	    TimeTracking.get({id: '118593641'}, function(err, timer) {
		assert(!err);
		assert.equal(typeof timer, "object");
		assert.equal(typeof timer.add, "object");
		assert(Array.isArray(timer.add.day_entry));
		assert.equal(typeof timer.add.day_entry[0], "object");
		assert(Array.isArray(timer.add.day_entry[0].id));
		assert(Array.isArray(timer.add.day_entry[0].spent_at));
		assert(Array.isArray(timer.add.day_entry[0].user_id));
		assert(Array.isArray(timer.add.day_entry[0].client));
		assert(Array.isArray(timer.add.day_entry[0].project_id));
		assert(Array.isArray(timer.add.day_entry[0].project));
		assert(Array.isArray(timer.add.day_entry[0].task_id));
		assert(Array.isArray(timer.add.day_entry[0].task));
		assert(Array.isArray(timer.add.day_entry[0].hours));
		assert(Array.isArray(timer.add.day_entry[0].hours_without_timer));
		assert(Array.isArray(timer.add.day_entry[0].notes));
		assert(Array.isArray(timer.add.day_entry[0].created_at));
		assert(Array.isArray(timer.add.day_entry[0].updated_at));
		done();
	    });
        });
    });
    describe('Toggling a timer', function() {
        it('should implement the toggleTimer method', function() {
            assert.equal(typeof TimeTracking.toggleTimer, "function");
        });
	it('should toggle a timer on and off', function(done) {
	    TimeTracking.toggleTimer({id: '118593641'}, function(err, timer) {
		assert(!err);
		assert.equal(typeof timer, "object");
		assert.equal(typeof timer.timer, "object");
		assert(Array.isArray(timer.timer.day_entry));
		assert.equal(typeof timer.timer.day_entry[0], "object");
		assert(Array.isArray(timer.timer.day_entry[0].id));
		assert(Array.isArray(timer.timer.day_entry[0].spent_at));
		assert(Array.isArray(timer.timer.day_entry[0].user_id));
		assert(Array.isArray(timer.timer.day_entry[0].client));
		assert(Array.isArray(timer.timer.day_entry[0].project_id));
		assert(Array.isArray(timer.timer.day_entry[0].project));
		assert(Array.isArray(timer.timer.day_entry[0].task_id));
		assert(Array.isArray(timer.timer.day_entry[0].task));
		assert(Array.isArray(timer.timer.day_entry[0].hours));
		assert(Array.isArray(timer.timer.day_entry[0].hours_without_timer));
		assert(Array.isArray(timer.timer.day_entry[0].notes));
		assert(Array.isArray(timer.timer.day_entry[0].created_at));
		assert(Array.isArray(timer.timer.day_entry[0].updated_at));

		TimeTracking.toggleTimer({id: '118593641'}, function(err, timer) {
		    done();
		});
	    });
	});
    });
    describe('Creating an entry', function() {
        it('should implement the create method', function() {
            assert.equal(typeof TimeTracking.create, "function");
        });
	it('should allow the creation of new time entries', function(done) {
	    TimeTracking.create({
		notes: "This is a test time entry for the node-harvest client",
		hours: 3,
		project_id: '2837810',
		task_id: '1711152',
		spent_at: 'Sat, 17 Nov 2012'
	    }, function(err, timer) {
		assert(!err);
		assert.equal(typeof timer, "object");
		assert.equal(typeof timer.add, "object");
		assert(Array.isArray(timer.add.day_entry));
		assert.equal(typeof timer.add.day_entry[0], "object");
		assert(Array.isArray(timer.add.day_entry[0].id));
		assert(Array.isArray(timer.add.day_entry[0].spent_at));
		assert(Array.isArray(timer.add.day_entry[0].user_id));
		assert(Array.isArray(timer.add.day_entry[0].client));
		assert(Array.isArray(timer.add.day_entry[0].project_id));
		assert(Array.isArray(timer.add.day_entry[0].project));
		assert(Array.isArray(timer.add.day_entry[0].task_id));
		assert(Array.isArray(timer.add.day_entry[0].task));
		assert(Array.isArray(timer.add.day_entry[0].hours));
		assert(Array.isArray(timer.add.day_entry[0].hours_without_timer));
		assert(Array.isArray(timer.add.day_entry[0].notes));
		assert(Array.isArray(timer.add.day_entry[0].created_at));
		assert(Array.isArray(timer.add.day_entry[0].updated_at));

		var entry_id = timer.add.day_entry[0].id[0]._;

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
            assert.equal(typeof TimeTracking.delete, "function");
        });
        it('should allow the deletion of a time entry', function(done) {
	    TimeTracking.create({
		notes: "This is a test time entry for the node-harvest client",
		hours: 3,
		project_id: '2837810',
		task_id: '1711152',
		spent_at: 'Sat, 17 Nov 2012'
	    }, function(err, timer) {
		var entry_id = timer.add.day_entry[0].id[0]._;

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
            assert.equal(typeof TimeTracking.update, "function");
        });
	it('should allow the updating of time entries', function(done) {
	    TimeTracking.create({
		notes: "Boring new text",
		hours: 2,
		project_id: '2837810',
		task_id: '1711152',
		spent_at: 'Sun, 18 Nov 2012'
	    }, function(err, new_entry) {
		var entry_id = new_entry.add.day_entry[0].id[0]._;
		TimeTracking.update({
		    id: entry_id,
		    notes: "This is a test time entry for the node-harvest client",
		    hours: 3,
		    project_id: '2837810',
		    task_id: '1711152',
		    spent_at: 'Sun, 18 Nov 2012'
		}, function(err, entry) {
		    assert(!err);
		    assert.equal(typeof entry, "object");
		    assert.equal(typeof entry.add, "object");
		    assert(Array.isArray(entry.add.day_entry));
		    assert.equal(typeof entry.add.day_entry[0], "object");
		    assert(Array.isArray(entry.add.day_entry[0].id));
		    assert(Array.isArray(entry.add.day_entry[0].spent_at));
		    assert(Array.isArray(entry.add.day_entry[0].user_id));
		    assert(Array.isArray(entry.add.day_entry[0].client));
		    assert(Array.isArray(entry.add.day_entry[0].project_id));
		    assert(Array.isArray(entry.add.day_entry[0].project));
		    assert(Array.isArray(entry.add.day_entry[0].task_id));
		    assert(Array.isArray(entry.add.day_entry[0].task));
		    assert(Array.isArray(entry.add.day_entry[0].hours));
		    assert(Array.isArray(entry.add.day_entry[0].hours_without_timer));
		    assert(Array.isArray(entry.add.day_entry[0].notes));
		    assert(Array.isArray(entry.add.day_entry[0].created_at));
		    assert(Array.isArray(entry.add.day_entry[0].updated_at));

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