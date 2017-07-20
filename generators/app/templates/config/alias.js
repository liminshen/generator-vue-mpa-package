var path = require('path')
const containerPath = path.resolve('./');
module.exports = {
  '@components' : path.resolve(containerPath+'/src/components'),
  '@apply' : path.resolve(containerPath+'/src/components/apply'),
  '@api' : path.resolve(containerPath+'/src/api/index.js'),
  '@jsBridge' : path.resolve(containerPath+'/src/util/jsBridge.js'),
  'lp-jsBridge' : path.resolve(containerPath+'/src/util/jsBridge.js'),
  'lp-rem' : path.resolve(containerPath+'/src/util/rem.js'),
  'lp-cookie' : path.resolve(containerPath+'/src/util/cookie.js'),
  'vue$': 'vue/dist/vue.js',
  'vue-router$': 'vue-router/dist/vue-router.common.js'
}
