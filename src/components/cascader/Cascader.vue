<!-- author: 大冰 -->
<template>
  <div class="cascader" ref="cascader">
    <div class="trigger" @click="toggle">
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
  components: {
    TCascaderItem
  },
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

  methods: {
    onUpdateSelected(newSelected) {
      // console.log('n: ',newSelected.map(item => item.name));
      // let result = newSelected.map(item => item.name)
      this.$emit('update:selected', newSelected) // 传递当前选中的地区
    },

    onClickDocument(e) {
      let {cascader} = this.$refs
      if(cascader.contains(e.target)) return;
      this.close()
    },

    open() {
      this.popoverVisible = true
      this.$nextTick(() => {
        document.addEventListener('click', this.onClickDocument)
      })
    },

    close() {
      this.popoverVisible = false
      document.removeEventListener('click', this.onClickDocument)
    },

    toggle() { // 开关切换
      if(this.popoverVisible) {
        this.close()
        return
      }
      this.open()
    }
  },


  computed: {
    result() {
      return this.selected.map(item => item.name).join(' / ')
    }
  },

};
</script>
<style lang='scss' scoped>
@import "../../assets/css/style.scss";
.cascader {
  display: inline-block;
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
    z-index: 1;
  }
}
</style>