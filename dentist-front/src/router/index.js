import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import patient from './patient'
import material from './material'

Vue.use(VueRouter);

const routes = [
  patient,
  material
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  if (to.path === '/') {
    router.push('/patient/foo')
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
