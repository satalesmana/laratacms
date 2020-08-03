import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Dashboard from './pages/Home'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Dashboard
        }
        
    ]
})

export default router;
