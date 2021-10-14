<!-- author: 大冰 -->
<template>
    <transition name="slide">
        <div class="carouselItem" v-show='visible' :class="{reverse}">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
  name: "TCarouselItem",
  props: {
      name: {
          type: String,
          required: true
      }
  },

    data() {
        return {
            selected: undefined,
            reverse: false
        }
    },
    computed: {
       visible() {
           console.log('this.selected: ',this.selected)
           return this.selected === this.name
       }
    }
    
}
</script>
<style lang='scss' scoped>

.slide-enter {
    transform: translateX(100%);
    opacity: 0;

}
.slide-leave-to {
    transform: translateX(-100%) scale(.5);
    opacity: 0;
}

// 反向动画
.slide-enter.reverse{
    transform: translateX(-100%);
    opacity: 0;
}
.slide-leave-to.reverse{
    transform: translateX(100%) scale(.5);
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active{
    transition: all 2s;
}

// 关键css 让离开后脱离文档流
.slide-leave-active{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>