<!-- author: 大冰 -->
<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source" :key="item.name">
        <t-cascader-item :sourceItem="item"></t-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import TCascaderItem from "./CascaderItem.vue"
export default {
  name: "TCascader",
  props: {
    source: {
      type: Array
    }
  },
  components: {
    TCascaderItem
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/css/style.scss";
.cascader {
}
</style>