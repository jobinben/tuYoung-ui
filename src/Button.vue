<template>
  <button class="t-button" :class="{ [`icon-${iconPosition}`]: true }">
    <svg v-if="icon" class="icon">
      <use v-bind:xlink:href="`#i-${icon}`"></use>
    </svg>
    <!-- 插槽可以嵌入来自调用者的内容 -->
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  /**
   * icon : 图标
   * iconPosition : 图标位置
   */
  props: ["icon", "iconPosition"],
};
</script>

<style lang="less" scoped>
.t-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; /*解决设置inline内联元素后 元素上下不 对齐的cssbug */

  &:hover {
    border-color: var(--border-color-hover);
    cursor: pointer;
  }

  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.4em;
  }
  > .content{
      order: 2;
  }

  &.icon-right{
      > .icon {
          order: 2;
          margin-right: 0;
        margin-left: 0.4em;
      }
      > .content {
          order: 1;
      }
  }
}
.icon {
  width: 1em;
  height: 1em;
}
</style>