<!-- author: 大冰 -->
<template>
    <div id="app">
      <t-cascader :source="source" popover-height="200px"></t-cascader>
    </div>
</template>

<script>
import TCascader from "./components/cascader/Cascader.vue"
import TCascaderItem from "./components/cascader/CascaderItem.vue"

export default {
  name: "tuYoung",
  components:{
    TCascader,
    TCascaderItem
  },
  methods: {
    
  },

  data() {
    return {
      source: [
      {
        name: "广东省",
        children: [
          {
            name: '汕尾市',
            children: [
              { name: '城区'},
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
  }
}
</script>
<style lang='scss' scoped>

</style>