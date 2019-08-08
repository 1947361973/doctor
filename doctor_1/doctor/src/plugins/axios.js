import Vue from 'vue';
import axios from 'axios';
import store from './store'

// 推荐一个请求的拦截器
axios.interceptors.request.use(function(config) {
    // 做点事 config = {header,params,data,method,}
    //store.dispatch('VIEW_LOADING', true)//这个是经过actions的，因为这个业务在actions中没有逻辑问题可以处理所以用下面
    store.commit('VIEW_LOADING', true); //->mutations    ，actions无逻辑所以直接去找mutations
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加一个响应的拦截器
axios.interceptors.response.use(function(response) {
    // store.dispatch('VIEW_LOADING', false)
    store.commit('VIEW_LOADING', false)
    return response;
}, function(error) {
    // Do something with response error
    return Promise.reject(error);
});



Vue.prototype.$axios = axios;
window.axios = axios;

export default axios;