import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import patient from './patient'
import material from './material'
import config from '@/config'

Vue.use(VueRouter);

const routes = [
    patient,
    material,
    {
        path: '/login',
        name: 'login',
        component: () => import('@v/Login'),
        meta: {
            title: '登陆',
            exclude: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});


router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    if (to.meta.title) {
        document.title = to.meta.title
    }
    //如果没有token，就到登陆页面
    if (localStorage.getItem('token') === '' && localStorage.getItem('token')) {
        router.push(config.LOGIN_PAGE);
        next()
    }
    //如果有token了，就转到第一个页面
    if (to.path === '/' && localStorage.getItem('token') !== '' && localStorage.getItem('token')) {
        router.push(config.FIRST_PAGE);
        next()
    }
    next()
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
