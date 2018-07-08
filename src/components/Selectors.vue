<template>
  <div class="container">
    <h1 class="h1 red-text text-accent-2 center">Selectors</h1>
    <div class="divider"></div>
    <div class="wrapper">
      <card-panel v-for="(selector, index) in selectors"
                  :type="selector.type"
                  :key="'Selector_' + index"
                  :style="'animation-delay: ' + index * .05 + 's'"
                  >
      </card-panel>
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