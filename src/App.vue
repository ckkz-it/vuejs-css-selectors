<template>
  <div class="wrapper">

    <div class="navbab-fixed">
      <nav :class="className">
        <div class="nav-wrapper"
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

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>


  </div>
</template>

<script>

import Selectors from './components/selectors/Selectors';
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
      if (this.$route.path.indexOf('selectors') != -1) {
        return '';
      } else if (this.$route.path.indexOf('two') != -1) {
        return 'teal';
      } else if (this.$route.path.indexOf('three') != -1) {
        return 'amber darken-3';
      }
    }
  },
  methods: {
    
  },
  created() {
    this.$store.dispatch('toHtml');
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
