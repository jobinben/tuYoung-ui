<template>
  <div class="tabsHead" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TTabsHead",
  inject: ["eventBus"],
  data() {
    return {
    };
  },

  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
        this.updateLinePosition(vm)
      })
  },

  methods: {
    
   

     updateLinePosition (selectedVm) {
        let {width, left} = selectedVm.$el.getBoundingClientRect()
        let {left: left2} = this.$refs.head.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - left2}px`
      }

  },


};
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$blue: #2080f0;
.tabsHead {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid rgb(239, 239, 245);
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 0.4s;
  }
}
</style>