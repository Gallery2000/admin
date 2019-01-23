import Vue from 'vue';
import Vuex from 'vuex'
import app from './modules/app.js';
import getters from './getters.js';
import permission from './modules/permission'


Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        app,
        permission
    },
    getters
});
export default store;