<template>
  <div class="t-toast" ref="toast" :class="toastClasses">
    <div class="message">
      <slot></slot>
    </div>
    <template v-if="showClose">
      <div class="borderLine" ref="line"></div>
      <span class="toastClose" @click="onClickClose">
        {{ closeText }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: "tuYoungToast",
  props: {
    title: {
      type: String,
      default: "",
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 1500,
    },
    closeText: {
      type: String,
      default: "关闭",
    },
    callback: {
      type: Function,
      default: () => {},
    },
    position: {
      type: String,
      default: 'middle',
      validator: val => ['top', 'middle', 'bottom'].indexOf(val) !== -1
    }
  },

  data() {
    return {
      closeTimer: "",
    };
  },

  methods: {
    close() {
      this.$el.remove()
      this.$emit('beforeClose')
      clearTimeout(this.closeTimer) // 关闭自动关闭的异步
      this.$destroy()
    },

    onClickClose() {
      this.close() // 执行关闭
      this.callback(this) // 执行关闭回调 传入this 方便用户调用该组件内的方法
    },

    execAutoClose() {
      if (this.autoClose) {
        this.closeTimer = setTimeout(() => {
          this.close()
          this.callback(this) // 自动关闭也执行回调
        }, this.duration)
      }
    },

    updateStyles() {
      this.showClose &&
        this.$nextTick(() => {
          // 使用nextTick异步获取高度
          this.$refs.line.style.height = `${
            this.$refs.toast.getBoundingClientRect().height
          }px`
        });
    },
  },

  mounted() {
    this.execAutoClose();
    this.updateStyles();
  },

  computed: {
    toastClasses(){
      return {
        [`position-${this.position}`] : true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.65);
$toast-border-radius: 4px;

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.t-toast {
  animation: fade-in 1s;
  font-size: $font-size;
  color: #fff;
  background: $toast-bg;
  min-height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  left: 50%;
  display: flex;
  align-items: center;
  border-radius: $toast-border-radius;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;

  .message{
      padding: 8px 0;
  }

  .borderLine {
    border: 0.5px solid #666;
    height: 100%;
    margin-left: 16px;
  }
  .toastClose {
    padding-left: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }

  &.position-top{
    top: 0;
    transform: translateX(-50%); // 解决元素居中问题

  }
   &.position-middle{
    top: 50%;
    transform: translate(-50%, -50%);
  }
   &.position-bottom{
    bottom: 0;
    transform: translateX(-50%);
  }
}
</style>