<!-- author: 大冰 -->
<template>
  <div style="padding:1em;">
    <t-button>Default</t-button>
    <t-button type="primary">Primary</t-button>
    <t-button type="info">Info</t-button>
    <t-button type="success">Success</t-button>
    <t-button type="warning">Warning</t-button>
    <t-button type="error">Error</t-button>
  </div>
</template>

<script>
import TButton from "../../../../src/components/button/Button.vue";
export default {
  components: {
    TButton,
  },

  
};
</script>