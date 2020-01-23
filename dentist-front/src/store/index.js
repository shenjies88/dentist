import Vue from 'vue'
import Vuex from 'vuex'
import material from './PatientBaseStore'
import user from './UserStore'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        material,
        user
    }
});

export default store;

