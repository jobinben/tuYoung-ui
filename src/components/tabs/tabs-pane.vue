<template>
<!-- data-name属性用于单元测试 -->
  <div class="tabsPane" :class="classes" v-show="active"
  :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TTabsPane",
  inject: ['eventBus'],
  props: {
    name: {
      type: String| Number,
      required: true
    },
  },

  data() {
    return {
      active: false,
    };
  },

  created() {
    this.eventBus && this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },

  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.tabsPane{
    padding: 1em;
    
}
</style>