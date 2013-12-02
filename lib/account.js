var Account;

module.exports = Account = function (api) {
    this.api = api;
    this.client = api.client;
};

Account.prototype.get = function (options, cb) {
    var url = '/account/who_am_i';
    this.client.get(url, {}, cb);
};
