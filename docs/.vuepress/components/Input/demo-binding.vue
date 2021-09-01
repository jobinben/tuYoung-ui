<!-- author: 大冰 -->
<template>
  <div style="padding: 1em;">
    <t-input placeholder="输入点东西试试" v-model="msg"></t-input>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import TInput from "../../../../src/components/input/Input.vue";
export default {
  components: {
    TInput,
  },

  data() {
      return {
          msg: ''
      }
  }
 
};
</script>