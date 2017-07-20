import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const scrollBehavior = to => {
	const position = {}
	if (to.hash) {
		position.selector = to.hash
	}
	if (to.matched.some(mm => mm.meta.scrollToTop)) {
		position.x = 0
		position.y = 0
	}
	return position
}
// 公众号安全验证
const fairGuardRoute = (to, from, next) => {
	var tokenVal = localStorage.getItem("token");
	if (tokenVal) {
		next()
	} else {
	
	}
	next();
}
// 企业号验证
const busGuardRoute = (to, from, next) => {
	next()
}
// 路由定义
const routers = [
//播单
	{
		path: '/',
		name: 'add-friends',
		meta: {title: 'Amaze'},
		beforeEnter: fairGuardRoute,
		// component(resolve) {
		// 	require(["../components/page/add-friends.vue"], resolve)
		// },
    component : require("../components/demo/helloworld.vue")
	},
  {
    path: '/404',
    name: '404',
    meta: {title: '404'},
    beforeEnter: fairGuardRoute,
    component(resolve) {
      require(["../components/common/404.vue"], resolve)
    },
  },
	{path: '*', redirect: '/404'}
];


let router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	scrollBehavior,
	routes: routers
})
//路由渲染前
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		wxSetTitle(to.meta.title);
		// document.title = to.meta.title
	}
	next()
})
function wxSetTitle(title) {
	document.title = title;
	var mobile = navigator.userAgent.toLowerCase();
	if (/iphone|ipad|ipod/.test(mobile)) {
		var iframe = document.createElement('iframe');
		iframe.style.visibility = 'hidden';
		iframe.setAttribute('src', 'http://tx.ni11.cn/swagger/dist/images/logo_small.png');
		var iframeCallback = function () {
			setTimeout(function () {
				iframe.removeEventListener('load', iframeCallback);
				document.body.removeChild(iframe);
			}, 0);
		};
		iframe.addEventListener('load', iframeCallback);
		document.body.appendChild(iframe);
	}
}
export default router
