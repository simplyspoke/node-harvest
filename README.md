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
let Harvest = require('harvest'),
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
const Harvest = require('harvest');

const harvest = new Harvest({
  subdomain: 'your-shop-name',
  accessToken: 'your-oauth-token'
});
```

### To get an access token which can then be stored and used in future

```js
// See https://platform.harvestapp.com/oauth2_clients to get these
let harvest = new Harvest({
  subdomain: 'your-shop-name',
  redirectUri: 'your-redirect-uri'
  identifier: 'your-client-identifier',
  secret: 'your-client-secret'
});

// Send the user to harvest.getAccessTokenURL()) and grab the access code passed as a get parameter
// e.g. By running an express.js server at redirect_url
let access_code = req.query.code;

harvest.parseAccessCode(access_code, function(err, message) {
  // Do something here....
});
```

## Resources

Every resource is accessed via your `harvest` instance:

```js
const harvest = new Harvest({
  subdomain: 'your-shop-name',
  accessToken: 'your-oauth-token'
});

// harvest.<resouce_name>.<method_name>
```

Each method returns to a callback with the results:

```js
harvest.projects.list({}, function(error, res, body) {

})
```

### Available resources and methods

- account
  - `get(callback)`
  - `rate_limit_status(callback)`
- clientContacts
  - `list({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
  - `listByClient(clientId, callback)`
- clients
  - `list({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
  - `toggle(id, callback)`
- expenseCategories
  - `list({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
  - `toggle(id, callback)`
- expenses
  - `list({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
  - `attachReceipt(id, {params}, callback)`
  - `getReceipt(id, callback)`
- invoiceCategories
  - `list({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
- invoiceMessages
  - `list(invoiceId, {params}, callback)`
  - `get(invoiceId, id, callback)`
  - `send(invoiceId, callback)`
  - `delete(invoiceId, id, callback)`
  - `send(markSent, callback)`
  - `send(markDraft, callback)`
  - `send(markClosed, callback)`
  - `send(markOpen, callback)`
- invoicePayments
  - `list(invoiceId, {params}, callback)`
  - `get(invoiceId, id, callback)`
  - `create(invoiceId, {params}, callback)`
  - `delete(invoiceId, id, callback)`
- invoices
  - `list({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
- people
  - `list({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
  - `toggle(id, callback)`
- projects
  - `list({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
  - `toggle(id, callback)`
- reports
  - `timeEntriesByUser(id, {params}, callback)`
  - `expensesByUser(id, {params}, callback)`
  - `timeEntriesByProject(id, {params}, callback)`
  - `expensesByProject(id, {params}, callback)`
- taskAssignment
  - `list(projectId, {params}, callback)`
  - `get(projectId, id, callback)`
  - `update(projectId, id, {params}, callback)`
  - `delete(projectId, id, callback)`
  - `assign(projectId, {params}, callback)`
  - `addToAll(projectId, {params}, callback)`
- tasks
  - `list({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
  - `activate(id, callback)`
- timeTracking
  - `daily({params}, callback)`
  - `get(id, callback)`
  - `create({params}, callback)`
  - `update(id, {params}, callback)`
  - `delete(id, callback)`
  - `toggleTimer(id, callback)`
- userAssignment
  - `list(projectId, {params}, callback)`
  - `get(projectId, id, callback)`
  - `assign(projectId, {params}, callback)`
  - `update(projectId, id, {params}, callback)`
  - `delete(projectId, id, callback)`

For all methods, the last variable is expected to be a callback function. The possible options avalible for the params object can be found in the [Harvest API Documentation]. (http://help.getharvest.com/api/)

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
    "userAgent": "node-harvest test runner"
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
