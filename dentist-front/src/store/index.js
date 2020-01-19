import Vue from 'vue'
import Vuex from 'vuex'
import patient from './patient'
import material from './material'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        ...patient,
        ...material
    }
});

export default store;

