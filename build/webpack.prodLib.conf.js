const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

const env = process.env.NODE_ENV === 'testing' ? require('../config/test.env') : config.buildLib.env

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './packages'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  output: {
    path: config.buildLib.assetsRoot,
    publicPath: config.buildLib.assetsPublicPath,
    filename: config.buildLib.filename,
    library: config.buildLib.library,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new ExtractTextPlugin('../packages/styles/index.less', {
      allChunks: true
    })
  ]
})

if (config.buildLib.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig

