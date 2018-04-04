'use strict';

const appendQuery = require('append-query');
const _has = require('lodash/has');

const helpers = {
  dayOfYear: dayOfYear,
  getId: getId,
  has: has,
  ofUserUri: ofUserUri
};

module.exports = helpers;

/**
 * [dayOfYear description]
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
function dayOfYear(date) {
  let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate();

  let then = new Date(year, month, day, 12, 0, 0),
    first = new Date(year, 0, 0, 12, 0, 0);

  day = Math.round((then - first) / 864e5)

  return '/' + day + '/' + year;
}

/**
 * [getId description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getId(response) {
  if (typeof response.headers.location !== 'undefined') {
    return Number(response.headers.location.replace(/\/([A-Z])\w+\//gi, ''));
  }
  return null;
}

/**
 * [has description]
 * @param  {[type]}  object     [description]
 * @param  {[type]}  properties [description]
 * @return {Boolean}            [description]
 */
function has(object, properties) {
  for (let i = 0; i < properties.length; i++) {
    if (!_has(object, properties[i])) {
      return false;
    }
  }
  return true;
}

function ofUserUri(url, options) {
  if (options.of_user) {
    url = appendQuery(url, {
      of_user: options.of_user
    });
    delete options.of_user;
  }
  return url;
}
