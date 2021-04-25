import Vue from 'vue';

import auth from '@websanova/vue-auth/src/index.js';
import authBearer from '@/plugins/auth/bearer.js';
//@ts-ignore
import axios from '@websanova/vue-auth/drivers/http/axios.1.x';
//@ts-ignore
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x';
import {RouterNameEnum} from '@/router/index.types';


Vue.use(auth, {
    auth: authBearer,
    http: axios,
    router: router,
    rolesKey: 'type',
    tokenDefaultKey: 'token',

    // Redirects
    authRedirect: {name: RouterNameEnum.Main},
    forbiddenRedirect: {path: '/403'},
    notFoundRedirect: {path: '/404'},
    loginData: {
        url: 'login',
        method: 'POST',
        redirect: '/',
    },
    logoutData: {
        success: function (): void {
            // @ts-ignore
            this.token(this.options.refreshTokenName, 'INVALID');
        },
    },
    fetchData: {
        url: 'user',
        enabled: true,
    },
    refreshTokenName: 'refresh_token',

    parseUserData: data => data,
});
