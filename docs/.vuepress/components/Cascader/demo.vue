<!-- author: 大冰 -->
<template>
    <div style="padding: 1em">
      <!-- :selected="selected" @update:selected="selected = $event" -->
      <p>{{selected.map(item=>item.name)}}</p>
      <t-cascader :source="source" popover-height="200px"
        :selected.sync="selected"
      ></t-cascader>
    </div>
</template>

<script>
import TCascader from "../../../../src/components/cascader/Cascader.vue"
import TCascaderItem from "../../../../src/components/cascader/CascaderItem.vue"

export default {
  name: "tuYoung",
  components:{
    TCascader,
    TCascaderItem
  },

  data() {
    return {
      selected: [],

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
  }
}
</script>
<style lang='scss' scoped>

</style>