<template>
  <div class="tabsHead">
      <slot></slot>
      <div class="line" ref="line"></div>
      <div class="actions-wrapper">
        <slot name="actions"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "tuYoungTabsHead",
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name, vm) => {
      console.log(name, vm);
    })
  }
}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$blue: blue;
.tabsHead{
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  border: 1px solid red;
  position: relative;
  > .actions-wrapper{
    margin-left: auto;
  }
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom:1px solid $blue;
    width: 100px;
  }
}
</style>