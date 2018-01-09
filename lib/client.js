'use strict';

const assign = require('lodash/assign');
const cloneDeep = require('lodash/cloneDeep');
const Async = require('async');
const request = require('request');

const helpers = require('./helpers');

/**
 * [Client description]
 * @param {[type]} config [description]
 */
function Client(config) {
  const self = this;

  self.defaults = {
    baseUrl: config.host,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    qs: {},
    json: true,
    _fatalError: null,
    _timeout: null
  };

  if (config.useBasic) {
    self.defaults.auth = {
      username: config.email,
      password: config.password
    }
  }

  /**
   * [_queue description]
   * @type {[type]}
   */
  self._queue = Async.queue(function(task, done) {
    let options = cloneDeep(self.defaults);

    options.qs = {};

    if (config.useOAuth) {
      if (!config.access_token) {
        throw new Error('An access token is required if using oAuth, use parseAccessCode or pass an accessToken before making any requests');
      }

      options.qs.access_token = config.accessToken;
    }

    options.method = task.query.method;
    options.uri = task.query.uri;
    if (task.query.qs.formData) {
      options.formData = task.query.qs.formData
      delete task.query.qs.formData;
    }

    assign(options.qs, task.query.qs);

    request(options, function(error, res, body) {
      done('requested');
      if (helpers.has(res, 'headers.retry-after')) {
        self._queue.pause();
        self._queue.push(task);
        done();
        clearTimeout(self._timeout);

        let timeout = helpers.parseTimeout(res.headers['retry-after']);

        if (!isNaN(timeout)) {
          return self._timeout = setTimeout(function() {
            self._queue.resume();
          }, timeout)
        }
        error = timeout;
      }

      let id = helpers.getId(res);
      if (id) {
        assign(body, { id: id });
      }

      task.callback(error, res, body);
    });
  }, this.concurrency || 40);
}

Client.prototype = {
  push: push,
  setAccessToken: setAccessToken,
  parseTimeout: parseTimeout
}

module.exports = Client;

/**
 * [push description]
 * @param  {[type]}   query    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function push(query, callback) {
  this._queue.push({
    query: query,
    callback: callback
  });
}

/**
 * [setAccessToken description]
 * @param {[type]}   options [description]
 * @param {Function} cb      [description]
 */
function setAccessToken(options, cb) {
  const self = this;

  request.post(self.defaults.baseUrl + '/oauth2/token', {
    data: options
  })
    .on('complete', function(response) {
      if (!response.access_token) {
        return cb('Provided access code was rejected by Harvest, no token was returned', null);
      }

      self.defaults.accessToken = response.access_token;

      cb(null, 'Access token set');
    });
}

/**
 * [parseTimeout description]
 * @param  {[type]} after [description]
 * @return {[type]}       [description]
 */
function parseTimeout(after) {
  if (/^\d+$/.test(after)) {
    return parseInt(after, 10) * 1000;
  }
  let til = Date.parse(after);

  if (isNaN(til)) {
    return 'cannot parse Retry-After value: ' + after
  }
  return new Date(til) - new Date();
}
