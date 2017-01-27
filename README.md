[![Build Status](https://travis-ci.org/log0ymxm/node-harvest.svg?branch=master)](https://travis-ci.org/log0ymxm/node-harvest)
[![Coverage Status](https://coveralls.io/repos/log0ymxm/node-harvest/badge.svg?branch=master)](https://coveralls.io/r/log0ymxm/node-harvest?branch=master)
[![npm version](https://badge.fury.io/js/harvest.svg)](http://badge.fury.io/js/harvest)


**This project is seeking a maintainer to take over development. I'm unable to keep this library adequately updated.**

Harvest is a tool that enables businesses to track time, track projects, manage clients, and invoice. This is a full client API built using node.js and the [Harvest API] (http://help.getharvest.com/api/).

# Install

  npm install harvest

# Usage

## Basic Authentication

```js
var Harvest = require('harvest'),
	harvest = new Harvest({
    subdomain: config.harvest.subdomain,
    email: config.harvest.email,
    password: config.harvest.password
  }),
  TimeTracking = harvest.TimeTracking;

TimeTracking.daily({}, function(err, tasks) {
  if (err) throw new Error(err);

  // work with tasks
});
```

## OAuth Authentication

### When you already have an access token

```js
var harvest_with_token = new Harvest({
  subdomain: config.harvest_oauth.subdomain,
  access_token: stored_access_token
});

var TimeTracking = harvest.TimeTracking;

TimeTracking.daily({}, function(err, tasks) {
  if (err) throw new Error(err);

  console.log('Loaded tasks using passed in auth_token!');
});
```

### To get an access token which can then be stored and used in future

```js
// See https://platform.harvestapp.com/oauth2_clients to get these
var harvest = new Harvest({
  subdomain: config.harvest_oauth.subdomain,
  redirect_uri: config.harvest_oauth.redirect_uri,
  identifier: config.harvest_oauth.client_id,
  secret: config.harvest_oauth.secret
});

// Send the user to harvest.getAccessTokenURL()) and grab the access code passed as a get parameter
// e.g. By running an express.js server at redirect_url
var access_code = req.query.code;

harvest.parseAccessCode(access_code, function(access_token) {
  console.log('Grabbed the access token to save', access_token);

  var TimeTracking = harvest.TimeTracking;

  TimeTracking.daily({}, function(err, tasks) {
    if (err) throw new Error(err);

    console.log('Loaded tasks using oauth!');
  });
});
```

# Testing

In order to test you will need to create a config file that uses your credentials inside `config/default.json`

```json
{
  "harvest": {
    "subdomain": "...",
    "email": "...",
    "password": "...",
    "identifier": "...",
    "secret": "...",
    "user_agent": "node-harvest test runner"
  }
}
```

This API is designed to work either using HTTP Basic authentication, or OAuth so either set of credentials will work. Subdomain is always required.

## Running the tests

    npm test

    # or

    mocha

## Projects using this library

- [impleri/sow](https://github.com/impleri/sow): Command line time tracking utility
- [pingsrl/revenue](https://github.com/pingsrl/revenue): Revenue is a dashboard that gives you a quick summary of your revenue from Harvest
