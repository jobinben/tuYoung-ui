<!-- author: 大冰 -->
<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label"
      v-for="item in sourceItem" :key="item.name"
      @click="onClickLabel(item)"
      >
        {{item.name}}
      <t-icon class="icon" v-if="item.children" name="right"></t-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <t-cascader-item :sourceItem="rightItems" :height="height"
      :level="level+1" :selected="selected" @update:selected="onUpdateSelected"
      ></t-cascader-item>
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
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
    }
  },

  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level]
      if(currentSelected && currentSelected.children) {
        return currentSelected.children
      }
      return null
    }
  },

  methods: {
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item 
      copy.splice(this.level + 1) // 重新选中时，切除后面已经选中的地区
      this.$emit('update:selected', copy)  // 传递当前选中的地区
      // console.log(this.selected[this.level]); // this.selected[this.level] 是上一次选中的地区
      // 如果没有孩子可以直接关闭
      if(!item.children){
        // let result = copy.map( item => item.name)
        // console.log(result)
      }
    },
    
    onUpdateSelected(newSelected) {
      // console.log('newSelect: ', newSelected); 
      this.$emit('update:selected', newSelected) // 传递最新选中的地区
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
    box-sizing: border-box;
    overflow: auto;
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