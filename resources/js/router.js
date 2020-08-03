import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import WebPage from './webpage/Mainpage'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: WebPage
        }
        
    ]
})


// router.beforeEach((to, from, next) => {
//     if (to.path == '/login') {
//         next();
//     } else {
//         store.commit('setLoading', true);
//         store.dispatch('checkAuth').then(r => {
//             store.commit('setUser', r.data.user);
//             next();
//         }).catch(e => next('/login?redirect=' + to.path)).finally(() => {
//             store.commit('setLoading', false);
//         })
//     }
// })

export default router;
