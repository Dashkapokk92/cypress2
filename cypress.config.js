const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7gd6bc',
  e2e: {
    baseUrl : "http://qamid.tmweb.ru/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
