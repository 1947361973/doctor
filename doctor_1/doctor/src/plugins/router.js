import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//import 是静态引入，编译时 ， 会事先引入
import Home from '../pages/Home.vue'
// import Column from '@/pages/Column'
const Column = () =>
    import ('../pages/Column.vue')
import Detail from '@/pages/Detail'
import Consult from '@/pages/Consult'
import Login from '@/pages/Login'
import User from '@/pages/User'
import Reg from '@/pages/Reg'
import Loading from '@/pages/Loading'
import Error from '@/pages/Error'

let routes = [
    { path: '/home', component: Home },
    { path: '/column', component: Column },
    { path: '/detail/:id', component: Detail },
    { path: '/consult', component: Consult },
    { path: '/login', component: Login },
    { path: '/user', component: User },
    { path: '/reg', component: Reg },
    { path: '/loading', component: Loading },
    { path: '/', redirect: '/home' },
    { path: '*', component: Error }
];

let router = new VueRouter({ routes });

export default router;