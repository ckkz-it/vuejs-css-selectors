<template>
  
  <div :class="`container center ${theme}-text text-accent-2`">
    <h1>Learn CSS selectors by testing how they work on different examples!</h1>
  </div>

</template>
<script>
  
export default {
  data() {
    return {
      
    }
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme
    }
  }
}

</script>

<style lang="sass" scoped>
.container
  max-width: 1200px

  h1
    margin-top: 100px
</style>