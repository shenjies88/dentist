import api from '@/api/ApiUser'

const store = {
    state: {
        userName: '',
        password: '',
        permissions: []
    },
    mutations: {
        setUserInfo(state, data) {
            this.state.user = {
                userName: data.userName,
                password: data.password,
                permissions: data.permission
            };
            localStorage.setItem('token', data.token)
        }
    },
    actions: {
        login({commit}, data) {
            api.login(data).then(res => {
                commit('setUserInfo', res.data)
            })
        }
    }

};

export default store
