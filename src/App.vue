<template>
  <div class="wrapper">

    <div class="navbab-fixed">
      <nav :class="`${theme} lighten-2`">
        <div class="nav-wrapper">
          <button :class="`to-main btn ${theme} lighten-2 waves-effect waves-light hide-on-med-and-down`"
                  @click.prevent="toMainPage"
                  >
                  Back to main
          </button>
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
                         <a>Something</a>
            </router-link>
            <router-link to="/three"
                         tag="li"
                         active-class="active"
                         >
                         <a>Something</a>
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
import Selectors from "./components/selectors/Selectors";
import Two from "./components/Two";
import Three from "./components/Three";
import Main from "./components/Main";
import CardPanel from "./components/CardPanel";

export default {
  data() {
    return {};
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    }
  },
  methods: {
    toMainPage() {
      this.$router.push("/");
    }
  },
  created() {
    this.$store.dispatch("toHtml");
  },
  components: {
    Selectors,
    Two,
    Three,
    Main
  }
};
</script>

<style lang="sass" src="../sass/app.sass"></style>
