import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import TheContainer from './containers/TheContainer'
import Dashboard from './pages/Home'

const router = new VueRouter({
    mode: 'history',
    base: "adminpanel",
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TheContainer,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: Dashboard
                },
                {
                    path: '/users',
                    name: 'users',
                    component: Dashboard
                }
            ]
        }
        
    ]
})

export default router;
