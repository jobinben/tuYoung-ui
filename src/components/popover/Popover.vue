<!-- author: 大冰 -->
<template>
  <div class="popover" @click.stop="onShow">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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

  methods: {
    onShow() {
      this.visible = !this.visible;
      console.log(1);
      if (this.visible === true) {
        setTimeout(() => {
          let eventHandler = () => {
            console.log(2);
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          }

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

  .content-wrapper {
    border: 1px solid red;
  }
}
</style>