<!-- author: 大冰 -->
<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <div class="cascaderWrapper" v-if="sourceItem.children">
      <t-cascader-item
        v-for="item in sourceItem.children"
        :sourceItem="item"
        :key="item.name"
      ></t-cascader-item>
    </div>
  </div>
</template>

<script>

export default {
  name: "TCascaderItem",
  props: {
    sourceItem: {
      type: Object,
    },
  },

};


</script>
<style lang='scss' scoped>
.cascaderItem {
  border: 1px solid red;
  margin: 10px;
}
</style>