# What is this?

This is a basic nextjs (12) site that uses the logging-lib to try and send logs to Newrelic.

# Usage:

* Run `yarn` to install the required packages
* Run `yarn link logging-lib` (make sure you've done the prerec steps in logging-lib dir first)

* Either update your newrelic.js adding an appropriate license key and app name or;
    * Export a `NEW_RELIC_LICENSE_KEY=eu<XXXXXXXXXX>` environment variable as required by the agent.
    * Export a `NEW_RELIC_APP_NAME=<name>` environment variable to override the default name of 'logging-demo'.

* Run `yarn dev` 

Note: You can also run `yarn clean` to delete the .next and node_modules folders.