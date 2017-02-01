'use strict';

const Async = require('async');

/**
 * Graceful request/response processing
 */
function Throttle(concurrency) {
  let self = this;

  self._timeout = null;
  self._fatalError = null;

  self._queue = Async.queue(function(task, done) {
    if (self._fatalError) {
      return task.callback(self._fatalError, {});
    }

    console.log(task.query);

    task.query()
      .on('success', function(data, res) {
        done();
        return task.callback(null, data, res);
      })

      .on('error', function(data, res) {
        done();

        if (res && res.statusCode < 400) {
          return task.callback(null, data, res);
        }
        return task.callback(data, {}, res);
      })

      .on('fail', function(data, res) {
        if (res && res.statusCode === 503 && res.headers['retry-after']) {
          self._queue.pause();
          self._queue.push(task);

          done();

          clearTimeout(self._timeout);

          // RFC2616, Section 14.37, timout may be either seconds or datetime value
          let timeout;
          if (/^\d+$/.test(res.headers['retry-after'])) {
            timeout = parseInt(res.headers['retry-after'], 10) * 1000;
          } else {
            let til = Date.parse(res.headers['retry-after']);

            if (isNaN(til)) {
              timeout = 0;
              self._fatalError = {
                'error': 'cannot parse Retry-After value: ' + res.headers['retry-after']
              };

              done();
              return task.callback(data, self._fatalError, res);

            } else {
              timeout = new Date(til) - new Date();
            }
          }

          return self._timeout = setTimeout(function() {
            self._queue.resume();
          }, timeout);

        }
        done();
        return task.callback(data, {}, res);
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
