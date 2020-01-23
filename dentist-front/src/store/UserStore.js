import api from '@/api/UserApi'
import tokenUtil from '@/libs/tokenUtil'
import permissionUtil from "@/libs/permissionUtil";

const store = {
    state: {
        userName: '',
        password: '',
        permissions: []
    },
    mutations: {
        setUserInfo(state, data) {
            this.state.user.userName = data.userName;
            this.state.user.password = data.password;
            this.state.user.permissions = data.permissions;
            tokenUtil.setToken(data.token)
        }
    },
    actions: {
        login({commit}, data) {
            api.login(data).then(res => {
                commit('setUserInfo', res.data)
            })
        },
        /**
         *  实际生产实践到时候需要带上token去请求后端
         * @param commit
         * @param _
         */
        getUserInfo({commit}, _) {
            api.getUserInfo().then(res => {
                commit('setUserInfo', res.data)
            });
        },
        /**
         * 过滤路由
         * @param _
         * @param routers
         * @param permissions
         * @returns {*}
         * @constructor
         */
        GenerateRoutes(_, {routers, permissions}) {
            return permissionUtil.filterRoutes(routers, permissions);
        }
    }

};

export default store
