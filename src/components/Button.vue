<template>
  <button class="t-button" :class="{ [`icon-${iconPosition}`]: true }"
  @click="$emit('click')"
  >
    <t-icon v-if="icon && !loading" :name="icon" class="icon"></t-icon>
    <t-icon v-if="loading" name="loading" class="loading icon"></t-icon>
    <!-- 插槽可以嵌入来自调用者的内容 -->
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./Icon.vue"
export default {

  components: {
    't-icon': Icon,
  },

  /**
   * icon : 图标
   * iconPosition : 图标位置
   */
  props: {
    icon: {
        type: String,
        default: ''
    },
    loading: {},
    iconPosition: {
      type: String,
      default: "left",
    //   validator (value) { // 属性检查器
    //     return value === 'left' || value === 'right'
    //   }
    // 优化代码
    validator: val => val === 'left' || val === 'right'

    },
  },
};
</script>

<style lang="less" scoped>

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

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
  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.4em;
    }
    > .content {
      order: 1;
    }
  }

  .loading{
      animation: spin 2s infinite linear;
  }

}

</style>