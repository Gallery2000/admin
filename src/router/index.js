import Vue from 'vue'
import Router from 'vue-router';

import Layout from '@/views/layout/Layout';
Vue.use(Router);

export const constantRouterMap = [
    {
        path:'/layout',
        alias:'/',
        component:Layout
    }
]
export default new Router({
    mode:'history',
    scrollBehavior:()=>({y:0}),
    routes:constantRouterMap
})
