'use strict';

const appendQuery = require('append-query');
const _has = require('lodash/has');

const helpers = {
  dayOfYear: dayOfYear,
  getId: getId,
  has: has
};

module.exports = helpers;

function dayOfYear(date) {
  let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate();

  let then = new Date(year, month, day, 12, 0, 0),
    first = new Date(year, 0, 0, 12, 0, 0);

  day = Math.round((then - first) / 864e5)

  return '/' + day + '/' + year;
}

function getId(response) {
  let location = response.headers.location;
  return Number(location.replace(/\/([A-Z])\w+\//gi, ''));
}

function has(object, properties) {
  for (let i = 0; i < properties.length; i++) {
    if (!_has(object, properties[i])) {
      return false;
    }
  }
  return true;
}
