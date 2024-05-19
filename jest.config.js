// https://jestjs.io/docs/en/configuration.html
module.exports = {
    projects: [
        {
            displayName: "node",
            testMatch: [
                "<rootDir>/lib/test/**/*.test.js"
            ]
        },
        {
            displayName: "electron",
            runner: "@kayahr/jest-electron-runner/main",
            testMatch: [
                "<rootDir>/lib/test/**/*.test.js"
            ],
            testEnvironmentOptions: {
                electron: {
                    options: [
                        "js-flags=--expose-gc"
                    ]
                }
            }
        }
    ],
    collectCoverageFrom: [
        "<rootDir>/lib/main/**/*.js"
    ],
    collectCoverage: false,
    coverageReporters: [
        "clover",
        "json",
        "lcov",
        "text",
        "cobertura"
    ],
    coverageDirectory: "lib/test/coverage",
    reporters: [
        "default",
        [
            "jest-junit",
            {
                "outputDirectory": "lib/test"
            }
        ]
    ],
    testTimeout: 15000
};
