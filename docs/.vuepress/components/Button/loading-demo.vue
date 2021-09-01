<!-- author: 大冰 -->
<template>
  <div  style="padding:1em;">
    <t-button :loading="!status" @click="status = !status">左加载</t-button>
    <t-button :loading="!status2" @click="status2 = !status2" iconPosition="right">右加载</t-button>
    <t-button :loading="!status3" @click="status3 = !status3" icon="success">有图标的加载</t-button>

  </div>
</template>

<script>
import TButton from "../../../../src/components/button/Button.vue";
import "../../../../src/components/svg";
export default {
  components: {
    TButton,
  },

  data() {
    return {
      status: false,
      status2: false,
      status3: false
    };
  },

 
};
</script>