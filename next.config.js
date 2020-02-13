const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withImages = require('next-images')

module.exports = withCSS(withLess(withImages({
    webpack: config => {
        config.node = {
            fs: "empty"
        };
        return config;
    },
    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV,
        SERVER: process.env.SERVER,
        LOCALE: process.env.LOCALE
    },
    experimental: {
        publicDirectory: true
    },
    serverRuntimeConfig: {
      JWT_SECRET: 'changeme',
    },
})));
