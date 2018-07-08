<template>
  <div class="card-panel red lighten-3 white-text">{{ type }}</div>
</template>
<script>
  
export default {
  props: ['type'],
  data() {
    return {
     
    }
  }
}

</script>
<style lang="sass" scoped>
@import "sass/smart-grid"

.card-panel
  font-size: 20px
  flex-basis: 30%
  +xs(flex-basis, 100%)
  margin-left: 15px 
  margin-right: 15px
  cursor: pointer
  animation: bubbleIn .4s ease-in backwards
  transition: transform .25s, background-color .25s, color .1s
  &:hover
    transform: scale(1.1)
    background-color: #D57575 !important

@keyframes bubbleIn
  0%
    opacity: 0
    transform: scale(0)
  60%
    transform: scale(.8)
  80%
    transform: scale(1.1)
    opacity: .6
  100%
    transform: scale(1)
    opacity: 1
    
</style>