import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "fixtures",
  screenshotsFolder: "screenshots",
  videosFolder: "videos",
  video: false,
  projectId: "cxgv6m",
  viewportWidth: 1440,
  viewportHeight: 800,
  includeShadowDom: true,
  defaultCommandTimeout: 30000,
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.js'
  },
});
