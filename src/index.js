const { applyDefaultConfig } = require('./config');
const { compose } = require('./utils/functions');
const context = require('./webpack/context');
const entry = require('./webpack/entry');
const output = require('./webpack/output');
const resolve = require('./webpack/resolve');

const buildWebpackConfigObject = configuration => Object.assign({},
  context(configuration.paths.app), entry(configuration.files.entry), output(configuration),
    resolve());
const webpackConfigBuilder = compose(applyDefaultConfig, buildWebpackConfigObject);

console.log(webpackConfigBuilder());

module.exports = webpackConfigBuilder;
