import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import patient from './patient'
import material from './material'
import config from '@/config'

Vue.use(VueRouter);

//根据权限动态添加的路由
const asyncRouter = [
    patient,
    material,
];

//系统加载时到必要的路由
const constRouter = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@view/Login'),
        hidden: true,
        meta: {
            title: '登陆',
        }
    }
];


const router = new VueRouter({
    mode: 'history',
    constRouter
});


router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
});

router.afterEach(to => {
    ViewUI.LoadingBar.finish();
    window.scrollTo(0, 0)
});

router.onError(err => {
    ViewUI.Message.error(err.message);
    ViewUI.LoadingBar.finish()
});
export default router
