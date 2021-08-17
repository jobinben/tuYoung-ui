<template>
  <button
    class="t-button"
    :class="[{ [`icon-${iconPosition}`]: true }, type]"
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
import Icon from "./Icon.vue";
export default {
  name: "tuYoungButton",
  components: {
    "t-icon": Icon,
  },

  /**
   * icon : 图标
   * iconPosition : 图标位置
   */
  props: {
    icon: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "default",
      validator: (val) => {
        let typeList = [
          "default",
          "primary",
          "success",
          "info",
          "warning",
          "error",
        ];
        return typeList.indexOf(val) !== -1;
      },
    },

    loading: {},
    iconPosition: {
      type: String,
      default: "left",
      //   validator (value) { // 属性检查器
      //     return value === 'left' || value === 'right'
      //   }
      // 优化代码
      validator: (val) => val === "left" || val === "right",
    },
  },
};
</script>

<style lang="scss" scoped>

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/**按钮type样式 */
  $button-bg-p: #18a058;
  $button-bg-p-hover: #36ad6a;
  $button-bg-p-active: #0c7a43;
  $button-bg-i: #2080f0;
  $button-bg-i-hover: #4098fc;
  $button-bg-i-active: #1060c9;
  $button-bg-w: #f0a020;
  $button-bg-w-hover: #fcb040;
  $button-bg-w-active: #c97c10;
  $button-bg-e: #d03050;
  $button-bg-e-hover: #de576d;
  $button-bg-e-active: #ab1f3f;

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

  
  &.primary, &.success{
    background: $button-bg-p;
    color: white;
    border-color: $button-bg-p;
    &:hover {
      border-color: $button-bg-p-hover;
      background: $button-bg-p-hover;
      cursor: pointer;
    }
    &:active {
      background: $button-bg-p-active;
      border-color: $button-bg-p-active;
    }
  }
  &.info{
    background:$button-bg-i;
    color: white;
    border-color: $button-bg-i;
    &:hover {
      border-color: $button-bg-i-hover;
      background: $button-bg-i-hover;
      cursor: pointer;
    }
    &:active {
      background: $button-bg-i-active;
      border-color: $button-bg-i-active;
    }
  }

  &.warning{
    background: $button-bg-w;
    color: white;
    border-color: $button-bg-w;
    &:hover {
      border-color: $button-bg-w-hover;
      background: $button-bg-w-hover;
      cursor: pointer;
    }
    &:active {
      background: $button-bg-w-active;
      border-color: $button-bg-w-active;
    }
  }

  &.error{
    background: $button-bg-e;
    color: white;
    border-color: $button-bg-e;
    &:hover {
      border-color: $button-bg-e-hover;
      background: $button-bg-e-hover;
      cursor: pointer;
    }
    &:active {
      background: $button-bg-e-active;
      border-color: $button-bg-e-active;
    }
  }

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

  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>