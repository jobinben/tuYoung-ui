<template>
<!-- data-name属性是用于单元测试 -->
  <div class="tabsItem" @click="onClick" :class="classes"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tuYoungTabsItem",

  // 注入创建的事件中心
  inject: ["eventBus"],

  props: {
    // 需要用户(前端开发者) 传值
    name: {
      type: String | Number,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled,
      };
    },
  },

  data() {
    // 不需要用户传值， 自身维护值
    return {
      active: false,
    };
  },

  created() {
    
    this.eventBus && this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },

  methods: {
    onClick() {
      if (this.disabled) return;
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit('click', this)
    },
  },
};
</script>

<style lang="scss" scoped>
.tabsItem {
  $blue: #2080f0;
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
  }
  &.disabled{
      color: #bbb;
      cursor: not-allowed;
  }
}
</style>
