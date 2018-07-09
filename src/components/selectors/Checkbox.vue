<template>
  <label>
    <input type="checkbox"
           @input="onSelectElem($event, name)"
           >
    <span>
      <slot name="select"><span class="selector">Select {{ name }}</span></slot>
      <slot name="pseudo-elements"><span class="selector">{{ name }}</span></slot>
    </span>
  </label>
</template>

<script>  

export default {
  props: ['name'],
  methods: {
    onSelectElem(e, name) {
      this.$emit('selectElem', {
        checked: e.target.checked,
        selector: name
      });
    }
  }
}
</script>

<style lang="sass">
.selector
  color: #5E5E5E
</style>