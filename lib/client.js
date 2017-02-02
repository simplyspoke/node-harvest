'use strict';

const Async = require('async');
const request = require('request');

const helpers = require('./helpers');

/**
 * Graceful request/response processing
 */
function Client(config) {
  const self = this;

  const defaults = {
    baseUrl: config.host
  }

  if (config.use_basic_auth) {
    defaults.auth = {
      username: config.email,
      password: config.password
    }
  } else {
    if (!config.accessToken) {
      throw new Error('An access token is required if using oAuth, use parseAccessCode or pass an accessToken before making any requests');
    }
    defaults.auth = {
      auth: {
        'bearer': config.accessToken
      }
    }
  }

  defaults.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  defaults.json = true

  self._timeout = null;
  self._fatalError = null;

  self._queue = Async.queue(function(task, done) {
    let options = defaults;

    options.method = task.query.method;
    options.uri = task.query.uri;
    options.qs = task.query.data;

    request(options, function(error, res, body) {
      done('requested');
      if (error) {
        console.log(error);
      }
      if (helpers.has(res, 'headers.retry-after')) {
        self._queue.pause();
        self._queue.push(task);
        done();
        clearTimeout(self._timeout);

        let timeout = helpers.parseTimeout(res.headers['retry-after']);

        if (isNaN(timeout)) {
          task.callback(timeout, res, body);
        }

        self._timeout = setTimeout(function() {
          self._queue.resume();
        }, timeout)
      } else {
        task.callback(error, res, body);
      }
    });
  }, this.concurrency || 40);
}

Client.prototype.push = function(query, callback) {
  this._queue.push({
    query: query,
    callback: callback
  });
};

module.exports = Client;

function parseTimeout(after) {
  console.log(this);

  if (/^\d+$/.test(after)) {
    return parseInt(after, 10) * 1000;
  }
  let til = Date.parse(after);

  if (isNaN(til)) {
    return 'cannot parse Retry-After value: ' + after
  }
  return new Date(til) - new Date();
}
