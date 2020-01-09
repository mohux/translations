const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
    webpack: config => {
        config.resolve.alias['~'] = path.resolve(__dirname);
        return config;
    }
});