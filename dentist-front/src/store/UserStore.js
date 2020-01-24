import api from '@/api/UserApi'
import tokenUtil from '@/libs/tokenUtil'
import permissionUtil from "@/libs/permissionUtil";

const store = {
    state: {
        userName: '',
        password: '',
        permissions: [],
        routes: [],
        sideMenuListData: []
    },
    mutations: {
        setUserInfo(_, data) {
            this.state.user.userName = data.userName;
            this.state.user.password = data.password;
            this.state.user.permissions = data.permissions;
            tokenUtil.setToken(data.token)
        },
        setRoutes(_, routes) {
            this.state.user.routes = routes;
            this.state.user.sideMenuListData = routes[0].children;
        },
        setSideMenuListData(_, sideMenuListData) {
            this.state.user.sideMenuListData = sideMenuListData;
        }
    },
    actions: {
        login({commit}, data) {
            api.login(data).then(res => {
                commit('setUserInfo', res.data)
            });
        },
        // 实际生产实践到时候需要带上token去请求后端
        getUserInfo({commit}, _) {
            return new Promise((resolve, reject) => {
                api.getUserInfo().then(res => {
                    commit('setUserInfo', res.data);
                    resolve(res.data);
                }).catch(e => {
                    reject(e);
                })
            });
        },
        //过滤路由
        GenerateRoutes({commit}, {routes, permissions}) {
            return new Promise((resolve, reject) => {
                let filterRoutes = permissionUtil.filterRoutes(routes, permissions);
                commit('setRoutes', filterRoutes);
                resolve(filterRoutes);
            })
        }
    }

};

export default store
