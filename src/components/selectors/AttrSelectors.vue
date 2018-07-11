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
          <div>
            <p data>Attribute is set</p>
            <p data="value">Equal</p>
            <p data="myvalue">Starts with</p>
            <p data="value-1">Equal or starts with value-*</p>
            <p data="my value">Contain substring</p>
            <p data="va lue">One of values divided by space</p>
            <p data="eulavym">Ends with</p>
          </div>
        </div>
      </div>

      <div class="card-action">
        <div id="checkboxes">
          <checkbox v-for="(selector, index) in selectors"
                    :name="selector"
                    @selectElem="selectElem"
                    :key="index"
                    >
          <span slot="select">Select</span>
          </checkbox>
        </div>
      </div>

    </div>
    

  </div>
</template>
<script>
import checkbox from './Checkbox';
  
export default {
  data() {
    return {
      description: this.$store.getters.getSelectors[4].description,
      html: this.$store.getters.getSelectors[4].html,
      selectors: ['[data]', '[data="value"]', '[data^="myv"]', '[data|="value"]',
                  '[data*="val"]', '[data~="lue"]', '[data$="vym"]']
    }
  },
  methods: {
    selectElem(e) {
      let elem  = document.querySelectorAll('#select-region p' + e.selector),
          checked = e.checked;
      for (let i = 0; i < elem.length; i++) {
        if (checked == true) {
          elem[i].classList.add('selected');
        } else {
          elem[i].classList.remove('selected');
        }
      } 
    }
  },
  components: {
    checkbox
  }
}

</script>

<style lang="sass" scoped>
@import "sass/smart-grid"

.h2
  font-size: 40px

.selected
  border: 1px solid #ED1111 !important

#select-region
  transition: color .25s, font-size .25s
#select-region *
  border: 1px solid transparent
  transition: border .3s ease-in-out

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
      width: 200px

</style>