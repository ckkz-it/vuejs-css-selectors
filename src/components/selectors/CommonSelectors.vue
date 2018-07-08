<template>
  <div class="container">
    <h2 class="h2 red-text text-lighten-1 center">{{ description }}</h2>

    <div class="card">

      <div class="card-content">

        <div class="column">
          <span class="" v-html="text"></span>
        </div>
        <div id="select-region" class="column">
          <div class="my-class">
            Well,
            <p id="my-id">hello, my <span>little</span> world!</p>
          </div>
        </div>

      </div>

      <div class="card-action">
        <form>
          <label>
            <input type="checkbox"
                   @input="selectElem('*')"
                   >
            <span>Select *</span>
          </label>
          <label>
            <input type="checkbox"
                   @input="selectElem('span')"
                   >
            <span>Select &lt;span&gt;</span>
          </label>
          <label>
            <input type="checkbox"
                   @input="selectElem('#my-id')"
                   >
            <span>Select #my-id</span>
          </label>
          <label>
            <input type="checkbox"
                   @input="selectElem('.my-class')"
                   >
            <span>Select .my-class</span>
          </label>
        </form>
      </div>

    </div>
    

  </div>
</template>
<script>
  
export default {
  props: [],
  data() {
    return {
      description: this.$store.getters.getSelectors[0].description,
      text: this.$store.getters.getSelectors[0].text
    }
  },
  methods: {
    selectElem(selector) {
      let elem = document.querySelectorAll('#select-region ' + selector);
      for (let i = 0; i < elem.length; i++) {
        elem[i].classList.toggle('selected');
      } 
    }
  }
}

</script>
<style lang="sass">
@import "sass/smart-grid"

.h2
  font-size: 40px
// .tag
//   font-weight: bold
//   color: #A7413E
// .string
//   color: #90C362
.selected
  // font-size: 18px
  // font-weight: bold
  border: 1px solid #ED1111
#select-region
  transition: color .25s, font-size .25s

.card
  max-width: 1000px
  margin: 0 auto
  .card-content, form
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    align-items: center
  .card-content
    font-size: 16px
    font-family: monospace
    .my-class
      padding: 3px
    #my-id
      margin-left: 15px
  form
    label
      padding: 0 2px
      white-space: nowrap
      width: 200px

</style>