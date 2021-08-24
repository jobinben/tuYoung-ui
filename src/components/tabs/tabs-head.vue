<template>
  <div class="tabsHead">
      <slot></slot>
      <div class="line" ref="line" v-show="showLine"></div>
      <div class="actions-wrapper">
        <slot name="actions"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "tuYoungTabsHead",
  inject: ['eventBus'],
  data() {
    return {
      showLine: false
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', (name, vm) => {
      this.showLine = true
      let {width, left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      // this.$refs.line.style.left = `${left}px`
      this.$refs.line.style.transform = `translateX(${left}px)`


    })
  }
}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$blue: #2080f0;
.tabsHead{
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid rgb(239, 239, 245);
  > .actions-wrapper{
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom:2px solid $blue;
    transition: all .4s;
  }
}
</style>