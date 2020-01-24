import api from '@/api/UserApi'
import tokenUtil from '@/libs/tokenUtil'
import permissionUtil from "@/libs/permissionUtil";
import VueRouter from 'vue-router'
import config from "@/config";
import router from '@/router';

const createRouter = () => new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    base: './',
    routes: config.constRouter
});

function clean(commit) {
    tokenUtil.removeToken();
    commit('setIsLogin', false);
    router.matcher = createRouter().matcher;
    router.replace({path: config.LOGIN_PAGE});
}

const store = {
    state: {
        userName: '',
        password: '',
        isLogin: false,
        permissions: [],
        routes: [],
        sideMenuListData: []
    },
    mutations: {
        setUserInfo(_, data) {
            this.state.user.isLogin = true;
            tokenUtil.setToken(data.token);
            this.state.user.userName = data.userName;
            this.state.user.password = data.password;
            this.state.user.permissions = data.permissions;
        },
        setRoutes(_, routes) {
            this.state.user.routes = routes;
            this.state.user.sideMenuListData = routes[0].children;
        },
        setSideMenuListData(_, sideMenuListData) {
            this.state.user.sideMenuListData = sideMenuListData;
        },
        setIsLogin(_, isLogin) {
            this.state.user.isLogin = isLogin;
        }
    },
    actions: {
        login({commit}, data) {
            return new Promise((resolve, reject) => {
                api.login(data)
                    .then(res => {
                        commit('setUserInfo', res.data);
                        this.dispatch('GenerateRoutes', {
                            permissions: data.permissions,
                            routes: config.asyncRouter
                        })
                            .then(routes => {
                                router.addRoutes(routes);
                                resolve();
                            })
                    })
            });
        },
        getUserInfo({commit}, _) {
            return new Promise((resolve, reject) => {
                api.getUserInfo()
                    .then(res => {
                        commit('setUserInfo', res.data);
                        resolve(res.data.permissions);
                    })
                    .catch(e => {
                        console.log(e);
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
        },
        //正常的退出登陆
        loginOut({commit}, _) {
            clean(commit);
            api.loginOut();
        },
        //失败的退出登陆
        fedLoginOut({commit}, _) {
            return new Promise((resolve, reject) => {
                clean(commit);
                resolve();
            });

        }
    }
};

export default store
