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
          <div>This is simple <p>example</p> of <span class="my-class">way</span> to use pseudo-elements</div>
        </div>

      </div>

      <div class="card-action">
        <div id="checkboxes">
          <checkbox v-for="(selector, index) in selectors"
                    :name="selector"
                    @selectElem="selectElem"
                    :key="index"
                    >
          <span slot="pseudo-elements">{{ pseudoElems[index] }}</span>
          </checkbox>
        </div>
      </div>

    </div>
    

  </div>
</template>
<script>
import checkbox from './Checkbox';
  
export default {
  props: [],
  data() {
    return {
      description: this.$store.getters.getSelectors[3].description,
      html: this.$store.getters.getSelectors[3].html,
      selectors: ['p', 'div', '.my-class'],
      pseudoElems: ['::first-letter', '::selection (select text)', '::before, ::after']
    }
  },
  methods: {
    selectElem(e) {
      let elem  = document.querySelector('#select-region ' + e.selector),
          checked = e.checked;

      switch(e.selector) {
        case 'p':
          if (checked == true) {
            elem.classList.add('selected-p');
          } else {
              elem.classList.remove('selected-p');
            }
          break;
        case 'div':
          if (checked == true) {
            elem.classList.add('selected-div');
          } else {
              elem.classList.remove('selected-div');
          }
          break;
        case '.my-class':
          if (checked == true) {
              elem.classList.add('selected-my-class');
            } else {
                elem.classList.remove('selected-my-class');
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

#select-region
  transition: color .25s, font-size .25s
#select-region *
  border: 1px solid transparent
  transition: border .3s ease-in-out
.selected-p::first-letter
  color: #ED1111
.selected-div::selection
  color: #ED1111
  background-color: #000
.selected-my-class::before
  content: '(( '
.selected-my-class::after
  content: ' ))'


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
    #my-id
      margin-left: 15px
  #checkboxes
    label
      padding: 0 2px
      white-space: nowrap
      width: 250px

</style>