<!-- author: 大冰 -->
<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{result || '&nbsp;'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <t-cascader-item :sourceItem="source" :height="popoverHeight"
      :selected="selected" @update:selected="onUpdateSelected"
      ></t-cascader-item>
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
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      popoverVisible: false
    }
  },
  components: {
    TCascaderItem
  },
  methods: {
    onUpdateSelected(newSelected) {
      console.log('n: ',newSelected);
      this.$emit('update:selected', newSelected) // 传递当前选中的地区
    }
  },
  computed: {
    result() {
      return this.selected.map(item => item.name).join('/')
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../assets/css/style.scss";
.cascader {
  position: relative;
  .trigger{
    display: inline-flex;
    align-items: center;
    height: 32px;
    padding: 0 1em;
    min-width: 10em;
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