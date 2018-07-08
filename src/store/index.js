import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectors: [
      {
        type: 'Common: *, div, #id, .class',
        description: 'Select element(s) by tag, id or class',
        text: `&lt;div class="my-class"&gt;<div>
                  Well,
                  <p id="my-id">&lt;p id="my-id"&gt;
                      hello, my <span>&lt;span&gt;little&lt;/span&gt;</span> world!
                  &lt;/p&gt;</p>
              </div>&lt;/div&gt;`,
        path: 'selectors/common'
      },
      {
        type: 'Relationship between elements',
        description: 'Describe selectors by setting relationship between elements',
        text: '<div>Hey Ho!</div>',
        path: 'selectors/relationship'
      },
      {
        type: 'Pseudo-classes',
        description: 'A pseudo-class is used to define a special state of an element',
        text: '',
        path: 'selectors/pseudo'
      }
    ],

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