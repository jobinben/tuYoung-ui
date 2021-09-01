<!-- author: 大冰 -->
<template>
  <div style="padding: 1em;">
    <t-input placeholder="Error Input" error="tips of error." ></t-input> 
    <t-input placeholder="Success Input" success="tips of success."></t-input>
  </div>
</template>

<script>
import TInput from "../../../../src/components/input/Input.vue";
import "../../../../src/components/svg";
export default {
  components: {
    TInput,
  },
 
};
</script>