import Vue from 'vue'
import Vuex from 'vuex'
import patient from './patient'
import material from './material'
import user from './StoreUser'
import global from './StoreGlobal'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        ...patient,
        ...material,
        user,
        global
    }
});

export default store;

