import Vue from 'vue'
import Vuex from 'vuex'
import user from './UserStore'
import patientBase from './PatientBaseStore'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user,
        patientBase
    }
});

export default store;

