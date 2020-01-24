import patient from "@/router/patientRouter";
import material from "@/router/materialRouter";

const config = {
    baseUrl: {
        dev: '',
        pro: '',
    },
    apiSuccessCode: [0],
    preUrl: '/api',
    LOGIN_PAGE: '/login',
    FIRST_PAGE: '/',
    NO_PERMISSION_PAGE: '/401',
    //系统加载时到必要的路由
    constRouter: [
        {path: '/login', name: 'login', component: () => import('@/views/Login'), hidden: true, meta: {title: '登陆',}},
        {
            path: '/404',
            name: '404',
            component: () => import('@/views/NoFindPage'),
            hidden: true,
            meta: {title: '未找到页面',}
        },
        {
            path: '/401',
            name: '401',
            component: () => import('@/views/NoPermissionPage'),
            hidden: true,
            meta: {title: '权限不足',}
        },
    ],
    //根据权限动态添加的路由
    asyncRouter: [
        patient,
        material,
        {path: '*', redirect: '/404', hidden: true}
    ],
};

export default config

