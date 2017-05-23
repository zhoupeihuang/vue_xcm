// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Home from './components/Home';
import axios from 'axios';
//import router from './router'
//公用的 so 写在这里                                       
import GE from './assets/css/GE.css';
import MoblieUtil from './assets/js/moblieUtil.js';
import store from './store';
import TimeEntries from './components/TimeEntries.vue';
import LogTime from './components/LogTime.vue';
import NotFound from './components/404';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.prototype.$ajax = axios;
const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/time-entries',
        component: TimeEntries,
        children: [{
            path: 'log-time',
            component: LogTime,
        }]
    },
    {
        path: '*',
        component: NotFound
    }
]


const router = new VueRouter({
    // mode:'hash',
	routes
});

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    //template: '<App/>',
    //components: { App }
    render: h => h(App)
})