import api from '@/api/ApiPatientBase'

const store = {
    state: {
        patientBaseList: [],
        count: 0
    },
    mutations: {
        setPatientBaseList(state, data) {
            this.state.patientBase.patientBaseList = data.list;
            this.state.patientBase.count = data.count
        }
    },
    actions: {
        getPatientBaseList({commit}, param) {
            console.log(param);
            api.getPatientBaseList(param).then(res => {
                commit('setPatientBaseList', res.data);
            })
        },
        deletePatientBase(_, id) {
            api.deletePatientBase([id])
        },
        addPatientBase(_, param) {
            api.addPatientBase(param)
        },
        updatePatientBase(_, param) {
            api.updatePatientBase(param, param.id)
        }
    }

};

export default store
