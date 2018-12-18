import Vue from 'vue'
// 引入路由
import router from './router/router.js'
import App from './App.vue';
import store from './store/store.js';
import axios from 'axios';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Element);
new Vue({
	// 第六步 注册路由
	router,
	store,
	render: h => h(App)
}).$mount('#app')
