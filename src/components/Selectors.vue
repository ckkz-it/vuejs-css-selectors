<template>
  <div class="container">
    <h1 class="h1 red-text text-accent-2 center">Selectors</h1>
    <div class="divider"></div>
    <div class="wrapper">

      <router-link v-for="(selector, index) in selectors"
                   :key="'Selector_' + index"
                   @click="chooseSelector"
                   :to="selector.path"
                   >
        <card-panel :style="'animation-delay: ' + index * .05 + 's'"
                    :type="selector.type"
                    >
        </card-panel>
      </router-link>
      
    </div>
  </div> 
</template>
<script>
import CardPanel from "./CardPanel"
  
export default {
  data() {
    return {
      selectors: this.$store.getters.getSelectors
    }
  },
  methods: {
    chooseSelector() {
      
    }
  },
  mounted() {

  },
  components: {
    CardPanel
  }
}

</script>

<style lang="sass" scoped>
@import "sass/smart-grid"
// @import "sass/materialize.scss"

.divider
  margin-bottom: 30px
.wrapper
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  text-align: center
</style>