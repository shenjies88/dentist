const filterRoutes = (routes, permissions) => {
    let s = routes.filter(e => e.meta.exclude === undefined
        && (e.meta.permissions === undefined || subSet(e.meta.permissions, permissions).length === 0));
    return s;
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
        topMenuListData: [],
        sideMenuListData: [],
    },
    mutations: {
        setRoutes(state, {routes, permissions}) {
            let top = filterRoutes(routes, permissions);
            this.state.global = {
                topMenuListData: top,
                sideMenuListData: filterRoutes(filterRoutes(top[0].children), permissions)
            }
        },
        setSideMenuListData(state, {routes, permissions}) {
            this.state.global = {
                ...this.state.global,
                sideMenuListData: filterRoutes(routes, permissions)
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
