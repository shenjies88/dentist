import api from '@/api/UserApi'
import tokenUtil from '@/libs/tokenUtil'

const filterRoutes = (routes, permissions) => {
    if (routes !== undefined) {
        let topRouters = routes.filter(e => e.hidden === undefined
            && (e.meta.permissions === undefined || subSet(e.meta.permissions, permissions).length === 0));

        topRouters.forEach(e => {
            let subRouters = filterRoutes(e.children,permissions);
            e.children = subRouters
        })
        return topRouters;
    }
};

const subSet = function (arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    let subset = [];

    for (let item of set1) {
        if (!set2.has(item)) {
            subset.push(item);
        }
    }

    return subset;
};

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
            tokenUtil.setToken(data.token)
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
