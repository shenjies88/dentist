import api from '@/api/PatientBaseApi'

const store = {
    state: {
        patientBaseList: [],
        count: 0,
        submitDisabled: false,
        tableLoading: false
    },
    mutations: {
        setPatientBaseList(state, data) {
            this.state.patientBase.patientBaseList = data.list;
            this.state.patientBase.count = data.count;
        },
        setTableLoading(state, tableLoading) {
            this.state.patientBase.tableLoading = tableLoading;
        },
        setSubmitDisabled(state, submitDisabled) {
            this.state.patientBase.submitDisabled = submitDisabled;
        }
    },
    actions: {
        getPatientBaseList({commit}, param) {
            commit('setTableLoading', true);
            api.getPatientBaseList(param)
                .then(res => {
                    commit('setPatientBaseList', res.data);
                })
                .catch(e => {
                    console.log(e)
                })
                .finally(_ => {
                    commit('setTableLoading', false);
                })
        },
        deletePatientBase({commit}, id) {
            commit('setSubmitDisabled', true);
            return new Promise((resolve, reject) => {
                api.deletePatientBase([id])
                    .then(_ => {
                        resolve();
                    })
                    .catch(e => {
                        reject(e);
                    })
                    .finally(_ => {
                        commit('setSubmitDisabled', false);
                    })
            })
        },
        addPatientBase({commit}, param) {
            commit('setSubmitDisabled', true);
            return new Promise((resolve, reject) => {
                api.addPatientBase(param)
                    .then(_ => {
                        resolve();
                    })
                    .catch(e => {
                        reject(e);
                    })
                    .finally(_ => {
                        commit('setSubmitDisabled', false);
                    })
            })
        },
        updatePatientBase({commit}, param) {
            commit('setSubmitDisabled', true);
            return new Promise((resolve, reject) => {
                api.updatePatientBase(param, param.id)
                    .then(_ => {
                        resolve();
                    })
                    .catch(e => {
                        reject(e);
                    })
                    .finally(_ => {
                        commit('setSubmitDisabled', false);
                    })
            })
        }
    }

};

export default store
