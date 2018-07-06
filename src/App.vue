<template>
  <div class="wrapper">

    <div class="navbab-fixed">
      <nav>
        <div class="nav-wrapper">
          <ul>
            <router-link to="/one"
                         tag="li"
                         active-class="active"
                         >
                         <a>Tags</a>
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

    <div class="main">
      
      <router-view></router-view>

    </div>

  </div>
</template>

<script>

import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Main from './components/Main';

export default {
  data () {
    return {

    }
  },
  components: {
    One,
    Two,
    Three,
    Main
  },
  methods: {

  }
}
</script>

<style lang="sass" src="../sass/app.sass"></style>
<style lang="scss" src="../sass/materialize.scss"></style>
