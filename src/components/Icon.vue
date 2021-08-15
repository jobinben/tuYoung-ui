<template>
  <svg  class="t-icon">
      <use v-bind:xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style>
.t-icon {
  width: 1em;
  height: 1em;
}
</style>