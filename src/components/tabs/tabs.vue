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
    if(!this.$children.length) {
        throw new Error('t-tabs的子组件应该是t-tabs-body 和 t-tabs-head')
    }
    this.$children.forEach((vm) => {
      if (vm.$options.name === "tuYoungTabsHead") {
        vm.$children.forEach((childvm) => {
          if (
            childvm.$options.name === "tuYoungTabsItem" &&
            childvm.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, childvm);
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>