var Expenses;
var encode = require('./util/string').encodeHTML;

module.exports = Expenses = function(api) {
    this.api = api;
    this.client = api.client;
};

Expenses.prototype.list = function(options, cb) {

    var url = '/expenses';

    this.client.get(url, {}, cb);

};

Expenses.prototype.get = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/expenses/' + options.id;

    this.client.get(url, {}, cb);

};

Expenses.prototype.create = function(options, cb) {

    var expense = '<expense>';
    if (typeof options.notes !== "undefined")
	expense += '<notes>' + encode(options.notes) + '</notes>';
    if (typeof options.total_cost !== "undefined")
	expense += '<total-cost type="decimal">' + encode(options.total_cost) + '</total-cost>';
    if (typeof options.units !== "undefined")
	expense += '<units type="integer">' + encode(options.units) + '</units>';
    if (typeof options.project_id !== "undefined")
	expense += '<project-id type="integer">' + encode(options.project_id) + '</project-id>';
    if (typeof options.expense_category_id !== "undefined")
	expense += '<expense-category-id type="integer">' + encode(options.expense_category_id) + '</expense-category-id>';
    if (typeof options.spent_at !== "undefined")
	expense += '<spent-at type="date">' + encode(options.spent_at) + '</spent-at>';
    expense += '</expense>';

    var url = '/expenses';

    this.client.post(url, expense, cb);

};

Expenses.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var expense = '<expense>';
    if (typeof options.notes !== "undefined")
	expense += '<notes>' + encode(options.notes) + '</notes>';
    if (typeof options.total_cost !== "undefined")
	expense += '<total-cost type="decimal">' + encode(options.total_cost) + '</total-cost>';
    if (typeof options.units !== "undefined")
	expense += '<units type="integer">' + encode(options.units) + '</units>';
    if (typeof options.project_id !== "undefined")
	expense += '<project-id type="integer">' + encode(options.project_id) + '</project-id>';
    if (typeof options.expense_category_id !== "undefined")
	expense += '<expense-category-id type="integer">' + encode(options.expense_category_id) + '</expense-category-id>';
    if (typeof options.spent_at !== "undefined")
	expense += '<spent-at type="date">' + encode(options.spent_at) + '</spent-at>';
    expense += '</expense>';

    var url = '/expenses/' + options.id;

    this.client.put(url, expense, cb);

};

Expenses.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/expenses/' + options.id;

    this.client.delete(url, {}, cb);

};

Expenses.prototype.attachReceipt = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO post image data
    // POST /expenses/#{expense_id}/receipt HTTP/1.1
    // User-Agent: #{Your app name here}
    // Host: #{yoursubdomain}.harvestapp.com
    // Accept: application/xml
    // Authorization: Basic (insert your authentication string here)
    // Content-Length: 47899
    // Content-Type: multipart/form-data; boundary=------------------------------b7edea381b46
    // ------------------------------b7edea381b46
    // Content-Disposition: form-data; name="expense[receipt]"; filename="hotel.jpg"
    // Content-Type: image/jpeg
    // 
    // #{ BINARY IMAGE DATA }
    // 
    // ------------------------------b7edea381b46

    var url = '/expenses/' + options.id + '/receipt';

    this.client.post(url, {}, cb);

};

Expenses.prototype.getReceipt = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/expenses/' + options.id + '/receipt';

    this.client.get(url, {}, cb);

};
