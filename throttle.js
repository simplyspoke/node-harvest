'use strict';

var Async = require('async');

/**
 * Graceful request/response processing
 */
function Throttle(concurrency) {
  var self = this;

  this._timeout = null;
  this._fatalError = null;

  this._queue = Async.queue(function(task, done) {
    if (self._fatalError) {
      task.callback(self._fatalError, {});
      return;
    }

    task.query()
      .once('success', function(data, res) {
        done();
        task.callback(null, data, res);
      })

      .once('error', function(data, res) {
        done();

        if (res && res.statusCode < 400)
          task.callback(null, data, res);
        else
          task.callback(data, {}, res);
      })

      .once('fail', function(data, res) {
        if (res && res.statusCode === 503 && res.headers['retry-after']) {
          self._queue.pause();
          self._queue.push(task);

          done();

          clearTimeout(self._timeout);

          // RFC2616, Section 14.37, timout may be either seconds or datetime value
          var timeout;
          if (/^\d+$/.test(res.headers['retry-after'])) {
            timeout = parseInt(res.headers['retry-after'], 10) * 1000;
          } else {
            var til = Date.parse(res.headers['retry-after']);

            if (isNaN(til)) {
              timeout = 0;
              self._fatalError = {
                'error': 'cannot parse Retry-After value: ' + res.headers['retry-after']
              };

              done();
              task.callback(data, self._fatalError, res);

            } else
              timeout = new Date(til) - new Date();
          }

          self._timeout = setTimeout(function() {
            self._queue.resume();
          }, timeout);

        } else {
          done();
          task.callback(data, {}, res);
        }
      });
  }, concurrency || 40);
}

Throttle.prototype.push = function(query, callback) {
  this._queue.push({
    query: query,
    callback: callback
  });
};

module.exports = Throttle;
