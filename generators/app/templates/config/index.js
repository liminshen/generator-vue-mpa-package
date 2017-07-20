var path = require('path')

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    productionSourceMap: true,
  },
  dev: {
    env: require('./dev.env'),
    autoOpenBrowser : true,
    proxyTable : {},
    port: 8081,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
		cssSourceMap: false
  }
}
