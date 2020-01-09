const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const path = require("path");
// const webpack = require("webpack");
module.exports = withCSS(
  withSass({
    webpack(config) {
      config.resolve.alias["~"] = path.resolve(__dirname);
      return config;
    }
  })
);
