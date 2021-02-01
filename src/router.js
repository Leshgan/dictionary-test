import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const routes = [
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "Favorites" */ './pages/Favorites'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ './pages/Home'),
  },
];

const router = new Router({
  mode: 'history',
  linkActiveClass: 'link-active',
  routes,
});

router.beforeEach(async (to, from, next) => {
  await store.dispatch('filter/clear');
  next();
});

export default router;
