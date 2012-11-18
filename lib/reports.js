var Reports;

module.exports = Reports = function(api) {
    this.api = api;
    this.client = api.client;
};

Reports.prototype.timeEntriesByProject = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};

Reports.prototype.timeEntriesByCurrentUser = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};

Reports.prototype.timeEntriesByUser = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};

Reports.prototype.yourTimeEntriesByProject = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};

Reports.prototype.expensesByUser = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};

Reports.prototype.expensesByProject = function(options, cb) {

    var url = '';

    return self.client.get(url, {}, cb);

};
