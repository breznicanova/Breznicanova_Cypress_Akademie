const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  env: {
    pmtool_url: "https://google.com", //!! názov mmusí byť rovnaký ako v originálnom configu
    eshop_url: "https://www.seznam.cz",
    automation_test_store_url: "https://tredgate.cz",
  },
};
