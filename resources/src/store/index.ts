import Vue from 'vue'
import Vuex, {Store} from 'vuex'

Vue.use(Vuex)

export type IStore = Store<{}>;


const store = new Vuex.Store<{}>({});

export default store;
