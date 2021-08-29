<!-- author: 大冰 -->
<template>
  <div class="popover" @click.stop="onShow">
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
    console.log(this.$refs.triggerWrapper);
  },

  methods: {
    onShow() {
      this.visible = !this.visible;
      console.log(1);
      if (this.visible === true) {
        this.$nextTick(() => {
          // 将显示元素移到body尾部去
          document.body.appendChild(this.$refs.contentWrapper);
          let { left, top } = this.$refs.triggerWrapper.getBoundingClientRect();
          // 加上window.scroll 实现精准定位 不会因为滚动了位置不对
          this.$refs.contentWrapper.style.left = left + window.scrollX +"px";
          this.$refs.contentWrapper.style.top = top + window.scrollY +"px";
          // 移除事件
          let eventHandler = () => {
            console.log(2);
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };

          document.addEventListener("click", eventHandler);
        });
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