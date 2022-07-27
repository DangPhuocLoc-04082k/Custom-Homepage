// import merge from "webpack-merge";
// import webpackConfig from "./webpack.config";

const { merge } = require('webpack-merge');
const config = require('./webpack.config.js')

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map'
})