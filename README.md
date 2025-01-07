better-jest
===========

| :warning:  This project is no longer maintained because the author switched from Jest to [Vitest](https://vitest.dev/)  :warning: |
| ------------------------------------------------------------------------------------------------------------------------------- |

This is just wrapper script around [Jest](https://jestjs.io/) to start Jest with exposed garbage-collector and passing additional arguments from the JEST_OPTS environment variable.

Usage
-----

Install better-jest into your project:

    npm install -D @kayahr/better-jest

Use `better-jest` instead of `jest` in your `package.json`:

    "scripts": {
        "test": "better-jest",
    }

That's it.

Garbage collector
-----------------

By using better-jest you can use the `gc()` function within your Node.js tests or in Electron tests when using my [jest-electron-runner](https://www.npmjs.com/package/@kayahr/jest-electron-runner)

Environment variables
---------------------

You can define Jest options globally with the environment variable JEST_OPTS and these options will then be picked up by better-jest and passed to Jest. This is for example helpful for CI systems which have specific needs for running the tests, like limiting the number of parallel workers when the CI host has an insane number of CPU cores. It is easier to globally define this environment variable instead of configuring each build job separately.

    # Do this somewhere global on your system
    export JEST_OPTS="--max-workers 1"

    # Then run your tests in all your projects and Jest is now
    # limited to a single worker thread automatically
    npm test
