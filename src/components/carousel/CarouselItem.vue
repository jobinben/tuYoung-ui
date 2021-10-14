<!-- author: 大冰 -->
<template>
    <transition name="slide">
        <div class="carouselItem" v-show='visible'>
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
            visible: false
        }
    }
}
</script>
<style lang='scss' scoped>

.slide-enter {
    transform: translateX(100%);
}
.slide-leave-to {
    transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active{
    transition: all 2s;
}

.slide-leave-active{
    position: absolute;
    left: 0;
    top: 0;
    border: 10px solid red;
}
</style>