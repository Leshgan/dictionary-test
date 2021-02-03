import 'reset-css';
import './styles/style.scss';
import Vue from 'vue';
// eslint-disable-next-line sort-imports
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
