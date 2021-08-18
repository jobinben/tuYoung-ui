<template>
  <div class="row" :style="rowClasses">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        gutter: {
            type: [Number, String]
        }
    },

    

    mounted() {
        
        this.$children.forEach( vm => {
            vm.gutter = this.gutter
        })
    },

    computed: {
        rowClasses() {
            return {marginLeft: -this.gutter/2 + 'px', marginRight: -this.gutter/2 + 'px'}
        }
    }
}
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
    }
</style>