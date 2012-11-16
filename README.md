Harvest is a tool that enables businesses to track time, track projects, manage clients, and invoice. This is a full client API built using node.js.

# Usage

    var Harvest = require('../index')
        , harvest = new Harvest({
            subdomain: config.harvest.subdomain,
            email: config.harvest.email,
            password: config.harvest.password
        })
        TimeTracking = harvest.TimeTracking;

    TimeTracking.daily({}, function(err, tasks) {
        if (err) throw new Error(err);

	// work with tasks
    });

# Testing

In order to test you will need to create a config file that uses your credentials inside `config/default.json`

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

This API is designed to work either using HTTP Basic authentication, or OAuth so either set of credentials will work. Subdomain is always required.

## Running the tests

    npm test

    # or

    mocha

# WIP

Just a fair warning this is a work in progress, and though the entire API has been mocked up with testing, only a portion of API functionality exists. If you'd like to help out with this project, feel free to send a message or pull-request my way. The project should be relatively easy to grasp at this point.