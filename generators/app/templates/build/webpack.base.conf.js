var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
const containerPath = path.resolve('./')
const getEntry =  require('./getEntry.js');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var entrys = getEntry('./src/*.js');
module.exports = {
  entry: entrys,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@components' : path.resolve(containerPath+'/src/components'),
      '@apply' : path.resolve(containerPath+'/src/components/apply'),
      '@api' : path.resolve(containerPath+'/src/api/index.js'),
      '@jsBridge' : path.resolve(containerPath+'/src/util/jsBridge.js'),
      'lp-jsBridge' : path.resolve(containerPath+'/src/util/jsBridge.js'),
      'lp-rem' : path.resolve(containerPath+'/src/util/rem.js'),
      'lp-cookie' : path.resolve(containerPath+'/src/util/cookie.js'),
      'lp-testEqui' : path.resolve(containerPath+'/src/util/lp-testEqui/index.js'),
      'vue$': 'vue/dist/vue.js',
      'vue-router$': 'vue-router/dist/vue-router.common.js',
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
