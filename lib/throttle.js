'use strict';

const Async = require('async');

/**
 * Graceful request/response processing
 */
function Throttle(concurrency) {
  console.log('9 hit');
  let self = this;

  self._timeout = null;
  self._fatalError = null;

  self._queue = Async.queue(function(task, done) {
    if (self._fatalError) {
      return;
    }
    console.log('Task', task);
    task.query()
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
    done();
  })
  .on('error', function(err) {
    console.log(err)
    done();
  })
      // .on('response', function(err, res, data) {
      //   console.log('got responce');
      //   if (res.headers['retry-after']) {
      //     self._queue.pause();
      //     self._queue.push(task);
      //     let timeout = parseTimeout(res.headers['retry-after']);
      //
      //     if (isNaN(timeout)) {
      //       done();
      //       task.callback(timeout, res, data);
      //       self._fatalError = true;
      //     }
      //
      //     setTimeout(function() {
      //       self._queue.resume();
      //     }, timeout)
      //   } else {
      //     done();
      //     task.callback(err, res, data);
      //   }
      // })
      // .on('error', function(err, res, data) {
      //   console.log('got err');
      //   done();
      //   return task.callback(err, res, data);
      // });
  }, concurrency || 40);
}

Throttle.prototype.push = function(query, callback) {
  console.log('49 hit', query, callback);
  this._queue.push({
    query: query,
    callback: callback
  });
};

module.exports = Throttle;

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
