const path = require('path');
const yargs = require('yargs');
const webpack = require('webpack');


const libraryName = 'harvest';
const plugins = [];
const isProductionBuild = yargs.argv.mode === 'production';

if (isProductionBuild) {
  plugins.push(new DtsBundlePlugin());
}

module.exports = {
  entry: {
    index: './src/index.ts'
  },
  devtool: 'inline-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins,
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
};

function DtsBundlePlugin() {}

DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    const dts = require('dts-bundle');

    dts.bundle({
      name: libraryName,
      main: 'dist/src/index.d.ts',
      out: '../index.d.ts',
      removeSource: true,
      outputAsModuleFolder: true // to use npm in-package typings
    });
  });
};
