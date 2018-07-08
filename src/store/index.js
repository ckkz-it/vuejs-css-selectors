import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectors: [
      {
        type: 'Common: *, div, #id, .class',
        description: 'Select element(s) by tag, id or class',
        text: '&lt;div id="my-id" class="my-class"&gt;<br><div>&lt;p <p>Hello my little world!</p> &gt;p</div><br>&lt;/div&gt;'
      },
      {
        type: 'Relationship between elements',
        description: 'Describe selectors by setting relationship between elements',
        text: '<div>Hey Ho!</div>'
      },
      {
        type: 'Pseudo-classes',
        description: 'A pseudo-class is used to define a special state of an element',
        text: ''
      }
    ]
  },
  getters: {
    getSelectors(state) {
      return state.selectors;
    }
  },
  mutations: {

  },
  actions: {

  },
  strict: process.env.NODE_ENV !== 'production'
});