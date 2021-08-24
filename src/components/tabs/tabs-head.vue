<template>
  <div class="tabsHead">
      <slot></slot>
      <div class="actions-wrapper">
        <slot name="actions"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
.tabsHead{
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .actions-wrapper{
    margin-left: auto;
  }
}
</style>