const withSass = require("@zeit/next-sass");
const path = require("path");
// const webpack = require("webpack");


const PUBLIC_URL = 'http://localhost:3000';

module.exports = withSass({
    assetPrefix: PUBLIC_URL,
    webpack(config, options) {
        config.resolve.alias["~"] = path.resolve(__dirname);
        return config;
    }
});

