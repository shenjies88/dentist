const store = {
    state: {
        topMenuListData: [],
        sideMenuListData: {},
    },
    mutations: {
        setRoutes(state, routes) {
            //权限以及排除调的路由
            const top = routes.filter(e => e.meta.exclude === undefined);
            this.state.global.topMenuListData = top;
            this.state.global.sideMenuListData = top[0]
        }
    },
    actions: {}

};

export default store
