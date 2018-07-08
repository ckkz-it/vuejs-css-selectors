<template>
  <div class="wrapper">

    <div class="navbab-fixed">
      <nav>
        <div class="nav-wrapper"
             :class="className"
             >
          <ul>
            <router-link to="/selectors"
                         tag="li"
                         active-class="active"
                         >
                         <a>Selectors</a>
            </router-link>
            <router-link to="/two"
                         tag="li"
                         active-class="active"
                         >
                         <a>Styles</a>
            </router-link>
            <router-link to="/three"
                         tag="li"
                         active-class="active"
                         >
                         <a>Buttons</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>

    <router-view></router-view>


  </div>
</template>

<script>

import Selectors from './components/Selectors';
import Two from './components/Two';
import Three from './components/Three';
import Main from './components/Main';
import CardPanel from './components/CardPanel';

export default {
  data () {
    return {

    }
  },
  computed: {
    className() {
      if (false) {
        return 'teal';
      }
    }
  },
  methods: {
    
  },
  components: {
    Selectors,
    Two,
    Three,
    Main
  },

}
</script>

<style lang="sass" src="../sass/app.sass"></style>
