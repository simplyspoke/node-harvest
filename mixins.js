'use strict';

var appendQuery = require('append-query');

var mixins = {
  isUndefined: isUndefined,
  ofUserUrl: ofUserUrl
};

function isUndefined(obj) {
  var i;

  for (i = arguments.length - 1; i >= 1; i--) {
    if (!obj.hasOwnProperty(arguments[i])) {
      return true;
    }
  }
  return false;
}

function ofUserUrl(url, options) {
  if (options.of_user) {
    url = appendQuery(url, {
      of_user: options.of_user
    });
    delete options.of_user;
  }
  return url;
}

module.exports = mixins;
