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
            api.getPatientBaseList(param).then(res => {
                commit('setPatientBaseList', res.data);
                commit('setTableLoading', false);
            }).catch(_ => {
                commit('setTableLoading', false);
            })
        },
        deletePatientBase({commit}, id) {
            commit('setSubmitDisabled', true);
            return new Promise((resolve, reject) => {
                api.deletePatientBase([id]).then(_ => {
                    commit('setSubmitDisabled', false);
                    resolve();
                }).catch(e => {
                    commit('setSubmitDisabled', false);
                    reject(e);
                })
            })
        },
        addPatientBase({commit}, param) {
            commit('setSubmitDisabled', true);
            return new Promise((resolve, reject) => {
                api.addPatientBase(param).then(_ => {
                    commit('setSubmitDisabled', false);
                    resolve();
                }).catch(e => {
                    commit('setSubmitDisabled', false);
                    reject(e);
                })
            })
        },
        updatePatientBase({commit}, param) {
            commit('setSubmitDisabled', true);
            return new Promise((resolve, reject) => {
                api.updatePatientBase(param, param.id).then(_ => {
                    commit('setSubmitDisabled', false);
                    resolve();
                }).catch(e => {
                    commit('setSubmitDisabled', false);
                    reject(e);
                })
            })
        }
    }

};

export default store
