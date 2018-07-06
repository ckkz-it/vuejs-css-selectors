import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import {store} from './store/';
import {router} from './routes.js';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
