import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const allRoutes: RouteConfig[] = [
    {
        path: '/auth',
        component: () => import('@/ui/layouts/AuthLayout.vue'),
        meta: {auth: false},
        children: [
            {
                path: 'login',
                name: 'Login',
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
                name: 'Main',
                component: () => import('@/ui/pages/main/Main.vue'),
            },
        ]
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: allRoutes
});

export default router;
