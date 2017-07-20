/**
 * scss
 */
import '../styles/common/reset.scss';
import '../styles/demo.scss';
/**
 * 依赖引入
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import fastclick from 'fastclick';
import LazyRender from 'vue-lazy-render';
/**
 * 配置引入
 */
import '../util/rem';
import router from '../router/demo.js'
import App from '../app.vue';
/**
 * 配置
 */
fastclick.attach(document.body);
Vue.use(LazyRender)
Vue.use(VueResource);
/**
 * 初始化
 * @type {Vue}
 */
const app = new Vue({
	router,
	...App,
}).$mount('#app');

export { app, router }
