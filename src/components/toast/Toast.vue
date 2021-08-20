<template>
  <div class="t-toast">
    <slot></slot>
    <div class="borderLine" v-if="showClose"></div>
    <span class="toastClose" v-if="showClose" @click="onClickClose">
      {{ closeText }}
    </span>
  </div>
</template>

<script>
export default {
  name: "tuYoungToast",
  props: {
    title: {
      type: String,
      default: ''
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

  },

  data() {
    return {
      closeTimer: "",
    };
  },

  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },

    onClickClose() {
      this.close(); // 执行关闭
      clearTimeout(this.closeTimer) // 关闭自动关闭的异步
      this.callback(this); // 执行关闭回调 传入this 方便用户调用该组件内的方法
    },
  },


  mounted() {
    if (this.autoClose) {
      this.closeTimer = setTimeout(() => {
        this.close();
        this.callback(this); // 自动关闭也执行回调
      }, this.duration);
    }
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.65);
$toast-border-radius: 4px;
.t-toast {
  font-size: $font-size;
  color: #fff;
  background: $toast-bg;
  height: $toast-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: $toast-border-radius;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;

  .borderLine {
    border: 0.5px solid #666;
    height: 100%;
    margin-left: 16px;
  }
  .toastClose {
    padding-left: 16px;
    cursor: pointer;
  }
}
</style>