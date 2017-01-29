'use strict';

const appendQuery = require('append-query');

const mixins = {
  dayOfYear: dayOfYear,
  ofUserUrl: ofUserUrl
};

function dayOfYear(date) {
  let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate();

  let then = new Date(year, month, day, 12, 0, 0),
    first = new Date(year, 0, 0, 12, 0, 0);

  day = Math.round((then - first) / 864e5)

  return '/' + day + '/' + year;
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
