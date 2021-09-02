<template>
  <div class="t-layout" :class="layoutClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TLayout",

  data() {
    return {
      layoutClasses: {
        hasSider: false,
      },
    };
  },

  mounted() {
    console.log(this.$children);
    this.$children.forEach((vm) => {
      if (vm.$options.name === "tuYoungSider") {
        this.layoutClasses.hasSider = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.t-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>