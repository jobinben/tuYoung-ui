<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "tuYoungTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (val) => ["horizontal", "vertical"].indexOf(val) !== -1,
    },
  },

  data() {
    return {
      eventBus: new Vue(),
    };
  },

  // 提供一个可以注入的事件在其他组件可以使用。
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },

  created() {
    // console.log(this.eventBus)
    // console.log(this)
  },

  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "tuYoungTabsHead") {
        vm.$children.forEach((item) => {
          if (
            item.$options.name === "tuYoungTabsItem" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>