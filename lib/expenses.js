var Expenses;

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

    // TODO
    var expense = '<expense>' +
	    '<notes>Buy Valentine\'s Day chocolates for Harvest</notes>' +
	    '<total-cost type="decimal">11.00</total-cost>' +
	    '<project-id type="integer">2</project-id>' +
	    '<expense-category-id type="integer">1</expense-category-id>' +
	    '<spent-at type="date">Sun, 10 Feb 2008</spent-at>' +
	    '</expense>';
    var expense = '<expense>' +
	    '<notes>Drive to buy Valentine\'s chocolates</notes>' +
	    '<units type="integer">5</units>' +
	    '<project-id type="integer">2</project-id>' +
	    '<expense-category-id type="integer">3</expense-category-id>' +
	    '<spent-at type="date">Sun, 10 Feb 2008</spent-at>' +
	    '</expense>';

    var url = '/expenses';

    this.client.post(url, expense, cb);

};

Expenses.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    // TODO
    var expense = '<expense>' +
	    '<notes>Buy Valentine\'s Day _dark_ chocolates for Harvest</notes>' +
	    '<total-cost type="decimal">20.00</total-cost>' +
	    '</expense>';

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
