<!-- author: 大冰 -->
<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label"
      v-for="item in sourceItem" :key="item.name"
      @click="leftSelected = item"
      >
        {{item.name}}
      <t-icon class="icon" v-if="item.children" name="right"></t-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <t-cascader-item :sourceItem="rightItems" :height="height"></t-cascader-item>
    </div>
  </div>
</template>

<script>
import TIcon from "../icon/Icon.vue"
export default {
  name: "TCascaderItem",
  components: {
      TIcon
  },
  props: {
    sourceItem: {
      type: Array,
    },
    height: {
      type: String
    }
  },

  data() {
    return {
      leftSelected: null
    }
  },

  computed: {
    rightItems() {
      if(this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      }
      return null
    }
  }

};


</script>
<style lang='scss' scoped>
@import "../../assets/css/style.scss";
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left{
    height: 100%;
    padding: .3em 0;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color;
  }
  .label {
    padding: .3em 1em;
    display: flex;
    align-items: center;
    white-space: nowrap;
    .icon{
      margin-left: 1em;
      transform: scale(.8);
    }
  }
}
</style>