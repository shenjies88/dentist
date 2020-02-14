const permissionUtil = {

    /**
     * 过滤路由
     * @param routes
     * @param permissions
     * @returns {*}
     */
    filterRoutes: function (routes, permissions) {
        if (routes !== undefined) {
            //过滤第一层
            let topRouters = routes.filter(e => e.hidden === undefined
                && (e.meta.permissions === undefined || this.hasPermissions(e.meta.permissions, permissions).length === 0));
            //递归过滤子集
            topRouters.forEach(e => {
                e.children = this.filterRoutes(e.children, permissions)
            });
            return topRouters;
        }
    },

    /**
     * 判断是否有权限
     * @param arr1
     * @param arr2
     * @returns {[]}
     */
    hasPermissions: function (arr1, arr2) {
        let set1 = new Set(arr1);
        let set2 = new Set(arr2);

        let result = [];

        for (let item of set1) {
            if (!set2.has(item)) {
                result.push(item);
            }
        }

        return result;
    },
};

export default permissionUtil
