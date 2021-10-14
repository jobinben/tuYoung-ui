<!-- author: 大冰 -->
<template>
  <div class="carousel">
    <div class="carousel-window">
      <div class="carousel-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TCarousel",

  mounted() {
    let first = this.$children[0];
    console.log(first);
    first.visible = true;
    setTimeout(() => {
      first.visible = false;
      this.$children[1].visible = true;
    }, 3000);
  },
};
</script>
<style lang='scss' scoped>
.carousel {
    display: inline-block;
    border: 1px solid red;
    
  &-wrapper {
    position: relative;
  }
}
</style>