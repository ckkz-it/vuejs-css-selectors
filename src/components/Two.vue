<template>
  
    <div :class="`container center ${theme}-text text-accent-4`">
      <h1>Coming soon</h1>
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
      return this.$store.getters.getTheme;
    } 
  }
}

</script>

<style lang="sass" scoped>

.container
  margin-top: 50px

</style>