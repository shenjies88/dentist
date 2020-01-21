import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import patient from './patient'
import material from './material'

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

const LOGIN_PAGE = 'login';
const FIRST_PAGE = 'patient';

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  if (to.meta.title) {
    document.title = to.meta.title
  }
  //如果没有token
  if (localStorage.getItem('token') && localStorage.getItem('token') === '') {
    router.push(LOGIN_PAGE);
    next()
    //如果有token了，就转到第一个页面
  }
  if (localStorage.getItem('token') && localStorage.getItem('token') != '' && to.path === '/') {
    router.push(FIRST_PAGE);
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
