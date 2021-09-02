<template>
  <div class="t-row" :style="rowStyle" :class="rowClasses">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "TRow",
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: String,
            validator: val => ['left', 'right', 'center'].indexOf(val) !== -1,
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
    .t-row{
        display: flex;
        flex-wrap: wrap;
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