# What is this?

This is a tiny repo for demonstrating the issues with requiring pino from a custom library as opposed to directly via the application.

# How to use

1. Clone this repo
2. Change to the logging-lib folder and run `yarn`, `yarn build` and `yarn link`
3. Change to the demo-app folder and run `yarn`, `yarn link logging-lib` and export the variables `NEW_RELIC_LICENSE_KEY`
4. Use `yarn dev` to launch the app.

Navigate to localhost:3000 and a few logs will get presented on the node console.

However in newrelic for the account you are using, you will not see any logs other than the "local" loglines that were imported via pino directly.

This is due to the fact that the logging-lib uses pino internally and somehow newrelic cannot "shim" it.

If we remove pino entirely locally in demo-app and purely use the library version it still doesn't work, which is why i added it to demonstrate native dependencies do work.