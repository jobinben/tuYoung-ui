<!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
      <t-icon name="error"></t-icon>
      <t-icon name="success"></t-icon>
      <t-icon name="left"></t-icon>
      <t-icon name="right"></t-icon>
      <t-icon name="awesome"></t-icon>
  </div>
</template>

<script>
import TIcon from "../../../../src/components/icon/Icon.vue";
import "../../../../src/components/svg";

export default {
  components: {
    TIcon,
  },
};
</script>