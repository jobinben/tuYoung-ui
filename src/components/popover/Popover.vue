<!-- author: 大冰 -->
<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
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

  mounted() {
  },

  methods: {
    positionContent() {
      // 将显示元素移到body尾部去
      document.body.appendChild(this.$refs.contentWrapper);
      let { left, top } = this.$refs.triggerWrapper.getBoundingClientRect();
      // 加上window.scroll 实现精准定位 不会因为滚动了位置不对
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },

    onClickDocument(event) {
      if (this.$refs.popover && (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))) {
        return;
      }
      this.close();
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
.popover {
  display: inline-block;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border: 1px solid red;
}
</style>