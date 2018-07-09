import Vue from 'vue';
import Vuex from 'vuex';
import highlightHTML from '../../js/highlight-html.min.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectors: [
      {
        type: 'Common: *, div, #id, .class',
        description: 'Select element(s) by tag, id or class',
        text: `<div class="my-class">Well,
                  <p id="my-id">hello, my <span>little</span> world!</p>
                </div>`,
        path: 'selectors/common'
      },
      {
        type: 'Relationship between elements',
        description: 'Describe selectors by setting relationship between elements',
        text: `<ol id="parent-ol">
            <li>How</li>
            <li>good</li>
            <li>to
              <ol id="child-ol">
                <li>be</li>
                <li>aware</li>
              </ol>
            </li>
            <li id="some-li">of</li>
            <li>relationship</li>
            <li>selectors!</li>
          </ol>`,
        path: 'selectors/relation'
      },
      {
        type: 'Pseudo-classes',
        description: 'A pseudo-class is used to define a special state of an element',
        text: `<ol>
            <li>There</li>
            <li>is</li>
            <li>something
              <ol>
                <li>interesting</li>
                <li>in</li>
              </ol>
            </li>
            <li>learning
              <ol>
                <li>pseudo</li>
              </ol>
            </li>
            <li>classes</li>
            <li>too!</li>
          </ol>`,
        path: 'selectors/pseudoclasses'
      },
      {
        type: 'Pseudo-elements',
        description: 'A CSS pseudo-element is used to style specified parts of an element',
        text: `<div>This is simple <p>example</p> of <span class="my-class">way</span> to use pseudo-elements</div>`,
        path: 'selectors/pseudoelements'
      }
    ],
  htmlFilled: false
  },
  getters: {
    getSelectors(state) {
      return state.selectors;
    }
  },
  mutations: {
    toHtml(state) {
      for (let i = 0; i < state.selectors.length; i++) {
        state.selectors[i].html = highlightHTML(state.selectors[i].text, {
          mode: 'return',
          inputType: 'manual'
        });
      }
    }
  },
  actions: {
    toHtml(store) {
      if (store.state.htmlFilled === false) {
        store.commit('toHtml');
      }
    }
  },
  strict: process.env.NODE_ENV !== 'production'
});