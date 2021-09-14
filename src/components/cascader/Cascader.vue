<!-- author: 大冰 -->
<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <t-cascader-item :sourceItem="source" :height="popoverHeight"></t-cascader-item>
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
    },
    popoverHeight: {
      type: String
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
  position: relative;
  .trigger{
    height: 32px;
    width: 100px;
    border: 1px solid $border-color-hover;
  }
  .popover-wrapper{
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    display: flex;
    @extend .box-shadow;
  }
}
</style>