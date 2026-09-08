const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 440,
  viewportHeight: 200,
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    username: "standard_user",
    password: "secret_sauce",
  },

  e2e: {
    baseUrl: "https://www.scedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
