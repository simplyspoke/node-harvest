var TimeTracking;

module.exports = TimeTracking = function(api) {

    var self = this;

    this.api = api;
    this.client = api.client;

    this.daily = function(options, cb) {

        var url = '/daily';

        if (options.date) {
            url += '/' + options.date.getDay() + '/' + options.getFullYear();
        }

        return self.client.get(url, {}, cb);

    };

    this.get = function(id, options, cb) {

        if (typeof id === "undefined")
            return cb(new Error('retrieving a single entry requires an entry id'));

        var url = '/daily/show/' + id;

        return this.client.get(url, {}, cb);

    };

    this.toggleTimer = function(id, options, cb) {

        if (typeof id === "undefined")
            return cb(new Error('toggling an entry requires an entry id'));

        var url = '/daily/timer/' + id;

        return this.client.get(url, {}, cb);

    };

    this.create = function(options, cb) {

        //<request>
        //  <notes>Test api support</notes>
        //  <hours>3</hours>
        //  <project_id type="integer">3</project_id>
        //  <task_id type="integer">14</task_id>
        //  <spent_at type="date">Tue, 17 Oct 2006</spent_at>
        //</request>

        var time_entry = {};

        var url = '/daily/add';

        return this.client.post(url, time_entry, cb);

    };

    this.delete = function(id, options, cb) {

        if (typeof id === "undefined")
            return cb(new Error('deleting an entry requires an entry id'));

        var url = '/daily/delete/' + id;

        return this.client.delete(url, {}, cb);

    };

    this.update = function(id, options, cb) {

        if (typeof id === "undefined")
            return cb(new Error('updating an entry requires an entry id'));

        //<request>
        //  <notes>New notes</notes>
        //  <hours>1.07</hours>
        //  <spent_at type="date">Tue, 17 Oct 2006</spent_at>
        //  <project_id>52234</project_id>
        //  <task_id>67567</task_id>
        //</request>

        var time_entry = {};

        var url = '/daily/update/' + id;

        return this.client.post(url, {}, cb);

    };

    return this;
};

