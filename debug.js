'use strict';

const Harvest = require('./lib/harvest');
const harvest = new Harvest({
  subdomain: process.env.SUBDOMAIN || '',
  email: process.env.EMAIL || '',
  password: process.env.PASSWORD || '',
  userAgent: process.env.USERAGENT || 'node-harvest test runner'
});

harvest.clients.list({}, function(err, response, clients) {
  console.log(err, response, clients);
});
