import Vue from 'vue';
import Vuex from 'vuex'
import app from './modules/app.js';
import getters from './getters.js';
Vue.use(Vuex);
const store = {
    modules:{
        app
    },
    getters
}
export default getters;