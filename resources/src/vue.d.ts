import {AxiosInstance} from 'axios';
import VueRouter from 'vue-router';
import {IAuth} from "@/store/modules/auth/index.types";

declare module 'vue/types/vue' {
    interface Vue {
        auth: IAuth;
        router: VueRouter;
        axios: AxiosInstance;
    }

    interface VueConstructor<V extends Vue = Vue> {
        auth: IAuth;
        router: VueRouter;
        axios: AxiosInstance;
    }
}
