import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Selectors from './components/selectors/Selectors';
import CommonSelectors from './components/selectors/CommonSelectors';
import RelationSelectors from './components/selectors/RelationSelectors';
import PseudoClassesSelectors from './components/selectors/PseudoClassesSelectors';
import PseudoElements from './components/selectors/PseudoElements';
import AttrSelectors from './components/selectors/AttrSelectors';
import Two from './components/Two';
import Three from './components/Three';
import Main from './components/Main';


import { store } from './store';

const routes = [
  {
    path: '/selectors',
    component: Selectors,
    beforeEnter: (to, from, next) => {
      store.dispatch('onChangeTheme', 'red');
      next();
    },
  },
  {
    path: '/selectors/common',
    component: CommonSelectors
  },
  {
    path: '/selectors/relation',
    component: RelationSelectors
  },
  {
    path: '/selectors/pseudoclasses',
    component: PseudoClassesSelectors
  },
  {
    path: '/selectors/pseudoelements',
    component: PseudoElements
  },
  {
    path: '/selectors/attributes',
    component: AttrSelectors
  },
  {
    path: '/two',
    component: Two,
    beforeEnter: (to, from, next) => {
      store.dispatch('onChangeTheme', 'teal');
      next();
    }
  },
  {
    path: '/three',
    component: Three,
    activeClass: 'active',
    beforeEnter: (to, from, next) => {
      store.dispatch('onChangeTheme', 'orange');
      next();
    }
  },
  {
    path: '',
    component: Main,
    beforeEnter: (to, from, next) => {
      store.dispatch('onChangeTheme', 'red');
      next();
    }
  }
];

export const router = new VueRouter({
  routes
});
