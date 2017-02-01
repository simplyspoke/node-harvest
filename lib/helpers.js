'use strict';

const appendQuery = require('append-query');

const helpers = {
  dayOfYear: dayOfYear,
  getId: getId,
  has: has,
  ofUserUrl: ofUserUrl
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
    if (!object.hasOwnProperty(properties[i])) {
      return false;
    }
  }
  return true;
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
