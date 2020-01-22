const filterRoutes = routes => {
    return routes.filter(e => e.meta.exclude === undefined);
};

const store = {
    state: {
        topMenuListData: [],
        sideMenuListData: [],
    },
    mutations: {
        setRoutes(state, {routes, permissions}) {
            this.state.global = {
                topMenuListData: filterRoutes(routes),
                sideMenuListData: filterRoutes(filterRoutes(routes)[0].children)
            }
        },
        setSideMenuListData(state, {routes, permissions}) {
            this.state.global = {
                ...this.state.global,
                sideMenuListData: filterRoutes(routes)
            };
        }
    },
    actions: {
        setRoutesAction({commit}, data) {
            commit('setRoutes', data)
        }
    }

};

export default store
