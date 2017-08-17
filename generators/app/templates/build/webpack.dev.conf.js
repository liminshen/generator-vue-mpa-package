var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const getEntry =  require('./getEntry.js')

var htmls = getEntry('./publish/*.html')
const getHtmlTpl = ()=>{
  var result = [];
  for(let name in htmls){
    var tpl = htmls[name];
    result.push(new HtmlWebpackPlugin({
      filename: [name]+'.html',
      template: tpl,
      inject: true,
      chunks : [name]
    }))
  }
  return result;
}
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    ...getHtmlTpl(),
    new FriendlyErrorsPlugin()
  ]
})
