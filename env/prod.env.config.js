const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  env: {
    pmtool_url: "https://tredgate.com/pmtool/", //!! názov mmusí byť rovnaký ako v originálnom configu
    eshop_url: "https://tredgate.com/eshop/",
    automation_test_store_url: "https://automationteststore.com/",
  },
};
