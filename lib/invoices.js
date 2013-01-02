var Invoices;
var encode = require('./util/string').encodeHTML;

module.exports = Invoices = function(api) {
    this.api = api;
    this.client = api.client;
};

Invoices.prototype.list = function(options, cb) {

    var url = '/invoices';

    this.client.get(url, {}, cb);

};

Invoices.prototype.get = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.id;

    this.client.get(url, {}, cb);

};

Invoices.prototype.create = function(options, cb) {

    var invoice = '<invoice>';
    if (typeof options.due_at !== "undefined")
	invoice += '<due-at type="date">' + encode(options.due_at) + '</due-at>';
    if (typeof options.due_at_human_format !== "undefined")
	invoice += '<due-at-human-format>' + encode(options.due_at_human_format) + '</due-at-human-format>';
    if (typeof options.client_id !== "undefined")
	invoice += '<client-id type="integer">' + encode(options.client_id) + '</client-id>';
    if (typeof options.currency !== "undefined")
	invoice += '<currency>' + encode(options.currency) + '</currency>';
    if (typeof options.issued_at !== "undefined")
	invoice += '<issued-at type="date">' + encode(options.issued_at) + '</issued-at>';
    if (typeof options.subject !== "undefined")
	invoice += '<subject>' + encode(options.subject) + '</subject>';
    if (typeof options.notes !== "undefined")
	invoice += '<notes>' + encode(options.notes) + '</notes>';
    if (typeof options.number !== "undefined")
	invoice += '<number>' + encode(options.number) + '</number>';
    if (typeof options.kind !== "undefined")
	invoice += '<kind>' + encode(options.kind) + '</kind>';
    if (typeof options.projects_to_invoice !== "undefined")
	invoice += '<projects-to-invoice>' + encode(options.projects_to_invoice) + '</projects-to-invoice>';
    if (typeof options.import_hours !== "undefined")
	invoice += '<import-hours>' + encode(options.import_hours) + '</import-hours>';
    if (typeof options.import_expenses !== "undefined")
	invoice += '<import-expenses>' + encode(options.import_expenses) + '</import-expenses>';
    if (typeof options.period_end !== "undefined")
	invoice += '<period-end type="date">' + encode(options.period_end) + '</period-end>';
    if (typeof options.period_start !== "undefined")
	invoice += '<period-start type="date">' + encode(options.period_start) + '</period-start>';
    if (typeof options.expense_period_end !== "undefined")
	invoice += '<expense-period-end type="date">' + encode(options.expense_period_end) + '</expense-period-end>';
    if (typeof options.expense_period_start !== "undefined")
	invoice += '<expense-period-start type="date">' + encode(options.expense_period_start) + '</expense-period-start>';
    if (typeof options.updated_at !== "undefined")
	invoice += '<updated-at type="datetime">' + encode(options.updated_at) + '</updated-at>';
    if (typeof options.created_at !== "undefined")
	invoice += '<created-at type="datetime">' + encode(options.created_at) + '</created-at>';
    invoice += '</invoice>';

    var url = '/invoices';

    this.client.post(url, invoice, cb);

};

Invoices.prototype.update = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var invoice = '<invoice>';
    if (typeof options.due_at !== "undefined")
	invoice += '<due-at type="date">' + encode(options.due_at) + '</due-at>';
    if (typeof options.due_at_human_format !== "undefined")
	invoice += '<due-at-human-format>' + encode(options.due_at_human_format) + '</due-at-human-format>';
    if (typeof options.client_id !== "undefined")
	invoice += '<client-id type="integer">' + encode(options.client_id) + '</client-id>';
    if (typeof options.currency !== "undefined")
	invoice += '<currency>' + encode(options.currency) + '</currency>';
    if (typeof options.issued_at !== "undefined")
	invoice += '<issued-at type="date">' + encode(options.issued_at) + '</issued-at>';
    if (typeof options.subject !== "undefined")
	invoice += '<subject>' + encode(options.subject) + '</subject>';
    if (typeof options.notes !== "undefined")
	invoice += '<notes>' + encode(options.notes) + '</notes>';
    if (typeof options.number !== "undefined")
	invoice += '<number>' + encode(options.number) + '</number>';
    if (typeof options.kind !== "undefined")
	invoice += '<kind>' + encode(options.kind) + '</kind>';
    if (typeof options.projects_to_invoice !== "undefined")
	invoice += '<projects-to-invoice>' + encode(options.projects_to_invoice) + '</projects-to-invoice>';
    if (typeof options.import_hours !== "undefined")
	invoice += '<import-hours>' + encode(options.import_hours) + '</import-hours>';
    if (typeof options.import_expenses !== "undefined")
	invoice += '<import-expenses>' + encode(options.import_expenses) + '</import-expenses>';
    if (typeof options.period_end !== "undefined")
	invoice += '<period-end type="date">' + encode(options.period_end) + '</period-end>';
    if (typeof options.period_start !== "undefined")
	invoice += '<period-start type="date">' + encode(options.period_start) + '</period-start>';
    if (typeof options.expense_period_end !== "undefined")
	invoice += '<expense-period-end type="date">' + encode(options.expense_period_end) + '</expense-period-end>';
    if (typeof options.expense_period_start !== "undefined")
	invoice += '<expense-period-start type="date">' + encode(options.expense_period_start) + '</expense-period-start>';
    if (typeof options.updated_at !== "undefined")
	invoice += '<updated-at type="datetime">' + encode(options.updated_at) + '</updated-at>';
    if (typeof options.created_at !== "undefined")
	invoice += '<created-at type="datetime">' + encode(options.created_at) + '</created-at>';
    invoice += '</invoice>';

    var url = '/invoices/' + options.id;

    this.client.put(url, invoice, cb);

};

Invoices.prototype.delete = function(options, cb) {

    if (typeof options.id === "undefined")
        return cb(new Error('retrieving a single entry requires an entry id'));

    var url = '/invoices/' + options.id;

    this.client.delete(url, {}, cb);

};
