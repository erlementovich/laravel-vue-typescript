import Vue from 'vue'
import Vuex from 'vuex'
import { IUserState } from '@/store/modules/user.type'
import {IAppState} from "@/store/modules/app.type";

Vue.use(Vuex)

export interface IRootState {
    app: IAppState
    user: IUserState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
