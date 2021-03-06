/*
 * Copyright (C) 2022 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { spawnSync } from "child_process";

// Copy original arguments and replace better-jest with jest while doing this
const args = process.argv.map(arg => {
    if (arg.endsWith("better-jest")) {
        return arg.replace(/.*better-jest$/, require.resolve(".bin/jest"));
    } else {
        return arg;
    }
});

// First argument is the Node command itself
const command = args.shift();
if (command == null) {
    throw new Error("No command found");
}

// We want to use the garbage collector in tests
args.unshift("--expose-gc");

// If JEST_OPTS environment variable is present then parse it and add the options to the Jest CLI arguments
const jestOpts = process.env["JEST_OPTS"];
if (jestOpts != null) {
    jestOpts.split(/\s+/).forEach(option => {
        args.push(option);
    });
}

// Call the original Jest with the new options
spawnSync(command, args, {
    cwd: process.cwd(),
    stdio: "inherit"
});
