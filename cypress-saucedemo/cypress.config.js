const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1440,
  viewportHeight: 900,
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
    baseUrl: "https://jsonplaceholder.typicode.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
