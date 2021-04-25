import Vue from 'vue';
import {Action, getModule, Module, VuexModule} from "vuex-module-decorators";
import store from '@/store';
import {IUser} from '@/entity/user/user.types';
import {User} from "@/entity/user/user";
import {RouterNameEnum} from '@/router/index.types';

@Module({
    namespaced: true,
    name: 'auth',
    store,
    dynamic: true,
})

class AuthModule extends VuexModule {
    get user(): IUser {
        return new User(Vue.auth.user());
    }

    @Action
    async fetch(): Promise<any> {
        return await Vue.auth.fetch();
    }

    @Action
    async load(): Promise<any> {
        return await Vue.auth.load();
    }


    @Action
    async login(data): Promise<any> {
        return await Vue.auth.login({
            data: data,
            fetchUser: false,
            staySignedIn: true,
        });
    }


    @Action
    logout(): void {
        Vue.auth.logout({redirect: {name: RouterNameEnum.Main}});
    }
}

export const AuthStore = getModule(AuthModule);
