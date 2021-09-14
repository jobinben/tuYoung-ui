<!-- author: 大冰 -->
<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label"
      v-for="item in sourceItem" :key="item.name"
      @click="leftSelected = item"
      >
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <t-cascader-item :sourceItem="rightItems"></t-cascader-item>
    </div>
  </div>
</template>

<script>

export default {
  name: "TCascaderItem",
  props: {
    sourceItem: {
      type: Array,
    },
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
.cascaderItem {
  border: 1px solid red;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -1px;
  .label {
    white-space: nowrap;
  }
}
</style>