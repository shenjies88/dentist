import api from '@/api/ApiUser'

const store = {
    state: {
        userName: '',
        password: '',
    },
    mutations: {
        setUserInfo(state, data) {
            this.state.user.userName = data.userName;
            this.state.user.password = data.password;
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
