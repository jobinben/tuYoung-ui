<!-- author: 大冰 -->
<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "tuYoungPopover",

  data() {
    return {
      visible: false,
    };
  },

  mounted() {},

  methods: {
    positionContent() {
      // 将显示元素移到body尾部去
      document.body.appendChild(this.$refs.contentWrapper);
      let { left, top } = this.$refs.triggerWrapper.getBoundingClientRect();
      // 加上window.scroll 实现精准定位 不会因为滚动了位置不对
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },

    getRefs(ref, event) {
      // 获取ref对象元素
      return this.$refs[ref] &&  (this.$refs[ref] === event.target || this.$refs[ref].contains(event.target))
    },

    onClickDocument(event) {
      // 当前点击元素
      !this.getRefs('popover', event) && !this.getRefs('contentWrapper', event) && this.close();
    },

    open() {
      // 渲染内容
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },

    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },

    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) {
          this.close();
          return;
        }
        this.open();
      }
    },
  },
};
</script>
<style lang='scss' scoped>
$border-radius: 4px;
$border-color: #fff;
.popover {
  display: inline-block;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border-radius: $border-radius;
  border: 1px solid $border-color;
  box-shadow: 0 0 20px 9px rgba($color: #bbb, $alpha: 0.3);
  padding: 0.5em 1em;
  margin-top: -10px;
  max-width: 20em;
  background: #fff;
  word-break: break-all;
  &::before {
    content: "";
    display: block;
    border: 9px solid transparent;
    border-top-color: #fff;
    position: absolute;
    top: 100%;
    left: auto;
  }

  // &::after{
  //   content: '';
  //   display: block;
  //   border: 9px solid transparent;
  //   border-top-color: #fff;
  //   position: absolute;
  //   top: calc(100% - 1px);
  //   left: auto;
  // }
}
</style>