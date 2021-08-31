<!-- author: 大冰 -->
<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "tuYoungCollapse",

  props: {
    single: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    if (this.single) {
      return {
        eventBus: this.eventBus,
      };
    }
  },
};
</script>
<style lang='scss' scoped>
$grey: #bbb;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>