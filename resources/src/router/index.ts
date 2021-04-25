import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import {RouterNameEnum} from "@/router/index.types";

Vue.use(VueRouter)

const allRoutes: RouteConfig[] = [
    {
        path: '/auth',
        component: () => import('@/ui/layouts/AuthLayout.vue'),
        meta: {auth: false},
        children: [
            {
                path: 'login',
                name: RouterNameEnum.Login,
                component: () => import('@/ui/pages/auth/Login.vue'),
            },
            {
                path: 'logout',
                name: 'Logout',
                component: () => import('@/ui/pages/auth/Logout.vue'),
            }
        ]
    },
    {
        path: '/',
        component: () => import('@/ui/layouts/MainLayout.vue'),
        meta: {auth: false},
        children: [
            {
                path: 'app',
                name: RouterNameEnum.Main,
                component: () => import('@/ui/pages/main/Main.vue'),
            },
        ]
    },
]


Vue.router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: allRoutes
});
const router = Vue.router;
export default router;
