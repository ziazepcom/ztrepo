const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
///<reference types="cypress-xpath"/>;
///<reference types="cypress-downloadfile"/>;


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/report",
    code: false,
    overwrite: false,
    autoOpen: true,
    charts: true,
    reportPageTitle: "Zepcom-Reporter",
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    trashAssetsBeforeRuns: false,
  },
  "env": {
    msn: "https://www.msn.com/",
    siteURL: "https://www.cypress.io",
    vlink: "#page-content > header > div.styled__HeaderContent-sc-16oj5lj-0.fxXrLQ > div.styled__MenuWrapper-sc-16oj5lj-1.fRMvkK > ul:nth-child(2) > li:nth-child(3) > a",
    "db": {
      "host": "localhost",
      "user": "root",
      "password": "root",
      "database": "world"
    }
  },
  e2e: {
    port:9999,
    watchForFileChanges: false,
    //experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
