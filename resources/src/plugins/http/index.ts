import Vue from 'vue'
// @ts-ignore
import VueAxios from 'vue-axios'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.MIX_API_URL;
Vue.use(VueAxios, axios);

export default {
    root: process.env.MIX_API_URL,
};
