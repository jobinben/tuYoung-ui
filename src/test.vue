<!-- author: 大冰 -->
<template>
    <div id="app">
      <t-carousel class="slide" :selected.sync = 'selected'>
        <t-carousel-item name = 'a'>
          <div class="box">1</div>
        </t-carousel-item>
        
        <t-carousel-item name = 'b'>
          <div class="box">2</div>
        </t-carousel-item>
        
        <t-carousel-item name = 'c'>
          <div class="box">3</div>
        </t-carousel-item>
      </t-carousel>

      <t-cascader :source="source" popover-height="200px"
        :selected.sync="selected2"
      ></t-cascader>
    </div>
</template>

<script>

import TCarousel from "../src/components/carousel/Carousel.vue"
import TCarouselItem from "../src/components/carousel/CarouselItem.vue"
import TCascader from "../src/components/cascader/Cascader.vue"
export default {
  
  components:{
    TCarousel,
    TCarouselItem,
    TCascader
},
  methods: {
    
  },

  data() {
    return {
      selected: 'a',
      selected2: [],

      source: [
      {
        name: "广东省",
        children: [
          {
            name: '汕尾市',
            children: [
              {name: '城区'},
              {name : '陆丰'},
              {name : '海丰'},
              {name : '陆河'},
            ]
          },
          {
            name: '珠海市',
            children: [
              {name : '红旗镇'},
              {name: '金湾区'},
            ]
          }
        ]
      },

      {
        name: '福建省',
        children: [
          {
          name: "泉州市",
          children: [
            {name: '丰泽区'}
          ]
        }
        ]
      }

    ]
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