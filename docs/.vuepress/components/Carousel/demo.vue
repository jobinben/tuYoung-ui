<!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
    <t-carousel class="slide" :selected.sync="selected" :interval="2000" reverse>
      <t-carousel-item name="a">
        <div class="box">1</div>
      </t-carousel-item>

      <t-carousel-item name="b">
        <div class="box">2</div>
      </t-carousel-item>

      <t-carousel-item name="c">
        <div class="box">3</div>
      </t-carousel-item>
    </t-carousel>
  </div>
</template>

<script>
import TCarousel from "../../../../src/components/carousel/Carousel.vue";
import TCarouselItem from "../../../../src/components/carousel/CarouselItem.vue";
import "../../../../src/components/svg";
export default {
  components: {
    TCarousel,
    TCarouselItem,
  },
  methods: {},

  data() {
    return {
      selected: "b",
    };
  },
};
</script>
<style lang='scss' scoped>
.slide {
  margin: 40px;
}
.box {
  width: 100%;
  height: 200px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>