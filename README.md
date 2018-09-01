# Node Harvest

[![Build Status](https://travis-ci.org/simplyspoke/node-harvest.svg?branch=master)](https://travis-ci.org/simplyspoke/node-harvest)
[![Coverage Status](https://coveralls.io/repos/github/simplyspoke/node-harvest/badge.svg)](https://coveralls.io/github/simplyspoke/node-harvest)
[![npm version](https://badge.fury.io/js/harvest.svg)](http://badge.fury.io/js/harvest)
[![Dev Dependencies](https://david-dm.org/simplyspoke/node-harvest/dev-status.svg)](https://david-dm.org/simplyspoke/node-harvest?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/simplyspoke/node-harvest.svg)](https://greenkeeper.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**Version 1.x - Will be depreciated in the days to come, once enough testing of Version 2.x has been completed.**

**Version 2.x - This is a substantial update to the prior versions adding functionality compatible with the Harvest API v2. This version is not backwards compatible**

Harvest is a tool that enables businesses to track time, track projects, manage clients, and invoice. This is a full client API built using node.js and the [Harvest API](http://help.getharvest.com/api/). This node module provides an easy to use wrapper for the API returning promises.

# Install

`npm install harvest`

# Usage

## Basic Authentication

```js
import Harvest from 'harvest';

const harvest = new Harvest({
  subdomain: 'SUBDOMAIN',
  userAgent: 'MyApp (yourname@example.com)',
  concurrency: 1,
  auth: {
    accessToken: process.env.ACCESS_TOKEN,
    accountId: process.env.ACCOUNT_ID
  }
});

harvest.company
  .get()
  .then((response) => {
    const company = response;
    // Do some things with the company data
  });
```

## OAuth Authentication

*NOTE:* This feature has not yet been coded. To track its progress or provide feedback, use the following issue: https://github.com/simplyspoke/node-harvest/issues/85

## Resources

Every resource is accessed via your `harvest` instance:

```js
// harvest.<resouce_name>.<method_name>
```

Each method returns to a promise that resolves the results:

```js
harvest.projects.list().then((projects) =>{
  // Do something with the projects list.
})
```

### Available resources and methods (Method documentation not complete.)

- clients
- company
- contacts
- estimateItemCategories
- estimateMessages
- estimates
- expenseCategories
- expenses
- invoiceItemCategories
- invoiceMessages
- invoicePayments
- invoices
- projectAssignments
- projects
- roles
- taskAssignments
- tasks
- timeEntries
- userAssignments
- users

For all methods, the last variable is expected to be a callback function. The possible options available for the params object can be found in the [Harvest API Documentation](http://help.getharvest.com/api/).

# Testing

In order to run the tests, you will need to have the following environmental variables defined:

```
SUBDOMAIN=''
ACCESS_TOKEN=''
ACCOUNT_ID=''
```

For additional information about setting up harvest access tokens, visit the following page: https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/

## Running the tests

    npm test
    npm run test:watch
    npm run test:integration
    npm run test:integration:watch

## Projects using this library

- [impleri/sow](https://github.com/impleri/sow): Command line time tracking utility
- [pingsrl/revenue](https://github.com/pingsrl/revenue): Revenue is a dashboard that gives you a quick summary of your revenue from Harvest
