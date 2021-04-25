import Vue from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import "@/plugins";
import {vuetify} from "@/plugins/vuetify";

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store: store,
    router: router,
    vuetify,
    render: h => h(App)
});
