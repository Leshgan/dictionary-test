import Router from 'vue-router';
import Vue from 'vue';

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

export default router;
