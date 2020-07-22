require('./bootstrap');

import Vue from 'vue'
import App from './App.vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import router from './router'
import store from './store'

import VueCarousel from '@chenfengyuan/vue-carousel';
Vue.use(VueCarousel);

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

Vue.use(ElementUI, { locale })

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});