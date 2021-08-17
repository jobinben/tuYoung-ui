<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
  :style="{paddingLeft: gutter/2 +'px', paddingRight: gutter/2 + 'px'}"
  >
      <div style="background:skyblue; border: 1px solid red; height: 100px;">
         <slot></slot>

      </div>
  </div>
</template>

<script>
export default {

    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        },
        
    },

    data() {
        return {
            gutter: 0
        }
    }
}
</script>

<style lang="scss" scoped>
    .col{
        width: 50%;
       $class-prefix: col-;
       @for $n from 1 through 24 {
           &.#{$class-prefix}#{$n} {
               width: ($n / 24 ) * 100%;
           }
       }
  
       @for $n from 1 through 24 {
           &.offset-#{$n} {
               margin-left: ($n / 24 ) * 100%;
           }
       }
    }
</style>