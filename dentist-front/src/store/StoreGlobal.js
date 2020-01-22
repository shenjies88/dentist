const filterRoutes = routes => {
    return routes.filter(e => e.meta.exclude === undefined);
};

const store = {
    state: {
        topMenuListData: [],
        sideMenuListData: [],
    },
    mutations: {
        setRoutes(state, routes) {
            this.state.global.topMenuListData = filterRoutes(routes);
            this.state.global.sideMenuListData = filterRoutes(filterRoutes(routes)[0].children)
        },
        setSideMenuListData(state, routes) {
            this.state.global.sideMenuListData = filterRoutes(routes);
        }
    },
    actions: {
        setRoutesAction({commit}, routes) {
            commit('setRoutes', routes)
        }
    }

};

export default store
