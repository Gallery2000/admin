import Vue from 'vue'
import Router from 'vue-router';

import Layout from '@/views/layout/Layout';

import User from '@/views/user/User';
Vue.use(Router);

export const constantRouterMap = [
    {
        path:'/layout',
        alias:'/',
        component:Layout,
        meta:{title:'layout',icon:'wechat'}
    },
    {
        path:'/user',
        component:User,
        meta:{title:'user',icon:"user"},
        children:[
            {
                path:'admin',
                name:'admin',
                component:()=>import ('@/views/user/components/admin'),
                meta:{title:'admin'}
            },
            {
                path:'union',
                name:'union',
                component:()=>import ('@/views/user/components/union'),
                meta:{title:'union'}
            }
        ]
    }
]
export default new Router({
    mode:'history',
    scrollBehavior:()=>({y:0}),
    routes:constantRouterMap
})
