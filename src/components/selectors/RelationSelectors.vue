<template>
  <div class="container">
    <h2 class="h2 red-text text-lighten-1 center">{{ description }}</h2>

    <div class="card">

      <div class="card-content">

        <div class="column"
             v-html="html"
             >
        </div>
        <div id="select-region" class="column">
          <ol id="parent-ol">
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
          </ol>
        </div>

      </div>

      <div class="card-action">
        <div id="checkboxes">
          <radio v-for="(selector, index) in selectors"
                    :name="selector"
                    @selectElem="selectElem"
                    :key="index"
                    >
          <span slot="select">Select</span>
          </radio>
        </div>
      </div>

    </div>
    

  </div>
</template>
<script>
import radio from './Radio';
  
export default {
  props: [],
  data() {
    return {
      description: this.$store.getters.getSelectors[1].description,
      html: this.$store.getters.getSelectors[1].html,
      selectors: ['#parent-ol li', '#parent-ol > li', ' #some-li ~ li', '#parent-ol *', '#some-li + li']
    }
  },
  methods: {
    selectElem(e) {
      let elem  = document.querySelectorAll('#select-region ' + e.selector),
          elemAll  = document.querySelectorAll('#select-region *'),
          checked = e.checked;
      for (let i = 0; i < elemAll.length; i++) {
          elemAll[i].classList.remove('selected');
      }
      if (checked) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].classList.add('selected');
        }
      } 
    }
  },
  components: {
    radio
  }
}

</script>

<style lang="sass" scoped>
@import "sass/smart-grid"

.h2
  font-size: 40px

#select-region
  transition: color .25s, font-size .25s
#select-region *
  border: 1px solid transparent
  transition: border .3s ease-in-out
.selected
  border: 1px solid #ED1111 !important

.card
  max-width: 1000px
  margin: 0 auto
  .card-content, #checkboxes
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    align-items: center
  .card-content
    font-size: 16px
    font-family: monospace
  #checkboxes
    label
      padding: 0 2px
      white-space: nowrap
      width: 180px

</style>