/*
 ******************************************************
 *                      依赖引入                       *
 ******************************************************
 */
const path = require('path')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const devConfig = require('./webpack.base.conf.js')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const utils = require('./utils')
const config = require('../config')
/*
 ******************************************************
 *                      webpack配置									  *
 *                         prod                       *
 ******************************************************
 */
const webpackConfig = merge(devConfig,{
	output : {
		path: path.join(__dirname, '../dist'),
		filename: '[name].[chunkhash:8].js',
		chunkFilename: '[name].[chunkhash:16].js'
	},
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.build.productionSourceMap,
			extract: true,
			isPostloader : true
		})
	},
	plugins : [
		// new HtmlwebpackPlugin({
		// 	title: 'My first react app',
		// 	template: './index.html',
		// 	filename: 'index.html',
		// 	chunksSortMode: 'dependency',
		// 	hash: false,
		// 	inject: true,
		// 	minify: {
		// 		removeComments: true,
		// 		collapseWhitespace: true
		// 	},
		// }),
		new ExtractTextPlugin('[name].[hash].css'),
		new UglifyJSPlugin({
			compress: {
				warnings: false
			},
			sourceMap: true
		}),
		new ImageminPlugin({
      disable: true, // Disable during development
      pngquant: {
        quality: '95-100'
      }
    })
	]
});
///////无bug咒语\\\\\\\\\
module.exports = webpackConfig;
