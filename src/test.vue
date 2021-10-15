<!-- author: 大冰 -->
<template>
    <div id="app">
      <t-carousel class="slide" :selected.sync = 'selected' reverse>
        <t-carousel-item name = '1'>
          <div class="box">1</div>
        </t-carousel-item>
        
        <t-carousel-item name = '2'>
          <div class="box">2</div>
        </t-carousel-item>
        
        <t-carousel-item name = '3'>
          <div class="box">3</div>
        </t-carousel-item>
      </t-carousel>
    </div>
</template>

<script>

import TCarousel from "../src/components/carousel/Carousel.vue"
import TCarouselItem from "../src/components/carousel/CarouselItem.vue"
export default {
  
  name: "tuYoung",

  components:{
    TCarousel,
    TCarouselItem
},
  methods: {
    
  },

  data() {
    return {
      selected: '2'
    }
  },

  created() {

  }
}
</script>
<style lang='scss' scoped>
.slide{
  margin: 40px;
}
.box{
  border: 1px solid black;
  width: 100%;
  height: 200px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>