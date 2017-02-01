'use strict';

const Harvest = require('../lib/harvest');
const config = {
  subdomain: process.env.SUBDOMAIN || '',
  email: process.env.EMAIL || '',
  password: process.env.PASSWORD || '',
  identifier: process.env.IDENTIFIER || '',
  secret: process.env.SECRET || '',
  redirectUri: process.env.REDIRECTURI || '',
  userAgent: process.env.USERAGENT || 'node-harvest test runner'
};

module.exports = {
  harvest: new Harvest(config),
  config
};
