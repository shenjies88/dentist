import Vue from 'vue'
import VueRouter from 'vue-router'
import {LoadingBar, Message} from 'view-design';
import store from '@/store';
import tokenUtl from "@/libs/tokenUtil";
import permissionUtil from "@/libs/permissionUtil";
import config from '@/config'

Vue.use(VueRouter);

//白名单，没token也可以看的页面
const whiteList = ['/login', '/404', '/401'];

const router = new VueRouter({
    mode: 'history',
    routes: config.constRouter
});


router.beforeEach((to, from, next) => {
    LoadingBar.start();
    // 如果有token
    if (tokenUtl.getToken()) {
        //是登陆页面就直接跳转到首页
        if (to.path === config.LOGIN_PAGE) {
            next({path: config.FIRST_PAGE});
        } else {
            //判断是否有用户信息在store里
            //有用户信息
            if (!store.state.user.isLogin) {
                // 无用户信息，用户登陆过，但是关闭了浏览器，导致store里数据消失，
                // 获取用户信息，获取成功就添加路由然后跳转
                store.dispatch('getUserInfo').then(permissions => {
                    store.dispatch('GenerateRoutes', {permissions, routes: config.asyncRouter}).then(routes => {
                        router.addRoutes(routes);
                        next({...to, replace: true});
                    });
                }).catch(e => {
                    console.log(e);
                    // 失败就删除token跳转到登陆页面
                    tokenUtl.removeToken();
                    next({path: config.LOGIN_PAGE});
                })
            } else {
                //有权限就跳转
                if (permissionUtil.hasPermissions(to.meta.permissions, store.state.user.permissions).length === 0) {
                    next();
                } else {
                    //没权限就到401
                    next({path: config.NO_PERMISSION_PAGE, replace: true, query: {noGoBack: true}});
                }
            }
        }
    } else {
        //如果没token
        //在白名单就直接跳转
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            //不是白名单就去登陆页
            next({path: config.LOGIN_PAGE});
        }
    }
});

router.afterEach(to => {
    LoadingBar.finish();
    window.scrollTo(0, 0);
});

router.onError(err => {
    Message.error(err.message);
    LoadingBar.finish();
});
export default router
