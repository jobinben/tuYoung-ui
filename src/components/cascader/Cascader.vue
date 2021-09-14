<!-- author: 大冰 -->
<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <t-cascader-item :sourceItem="source"></t-cascader-item>
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
  data() {
    return {
      popoverVisible: false
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
  width: 100px;
  height: 32px;
  border: 1px solid red;
  .trigger{
    height: 100%;
  }
}
</style>