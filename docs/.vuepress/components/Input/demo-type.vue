
    <!-- author: 大冰 -->
<template>
  <div style="padding: 1em;">
    <t-input placeholder="支持 text" type="text"></t-input>

    <t-input placeholder="支持 number" type="number"></t-input>

    <t-input placeholder="支持 password" type="password"></t-input>

    <t-input placeholder="支持 textarea" type="textarea"></t-input>
    
  </div>
</template>

<script>
import TInput from "../../../../src/components/input/Input.vue";
export default {
  components: {
    TInput,
  },
};
</script>