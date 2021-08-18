<template>
  <div class="row" :style="rowStyle" :class="rowClasses">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: String,
            validator: val => ['left', 'right', 'center'].includes(val)
        }
    },

    

    mounted() {
        
        this.$children.forEach( vm => {
            vm.gutter = this.gutter
        })
    },

    computed: {
        rowStyle() {
            return {marginLeft: -this.gutter/2 + 'px', marginRight: -this.gutter/2 + 'px'}
        },
        rowClasses() {
            let {align} = this
            return [align && `align-${align}`]
        }
    }
}
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
        &.align-left {
            justify-content: flex-start;
        }
        &.align-right {
            justify-content: flex-end;
        }
        &.align-center {
            justify-content: center;
        }

    }
</style>