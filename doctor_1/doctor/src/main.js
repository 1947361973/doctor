import Vue from 'vue'
import App from './App.vue'

import './assets/css/public.css';
//引入路由
import router from './plugins/router';
//引入axios插件配置模块
import axios from './plugins/axios';

//注册全局过滤器
// Vue.filter('过滤名',函数)
import date from './filters/date';
Vue.filter('date', date);

Vue.prototype.baseUrl = 'http://localhost:3000' //注册服务器的地址用于本地代理
    // Vue.prototype.baseUrl = 'http://121.43.42.44:3002' //用于打包到远端

//引入状态管理
import store from './plugins/store'

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')