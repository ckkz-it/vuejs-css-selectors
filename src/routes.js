import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Main from './components/Main';


import {store} from './store';

const routes = [
  {
    path: '/one',
    component: One
  },
  {
    path: '/two',
    component: Two
  },
  {
    path: '/three',
    component: Three,
    activeClass: 'active'
  },
  {
    path: '/',
    component: Main
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history',
  
});