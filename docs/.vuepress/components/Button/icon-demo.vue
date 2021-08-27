<!-- author: 大冰 -->
<template>
  <div>
    <t-button icon="awesome">左赞</t-button>
    <t-button icon="awesome" iconPosition="right">右赞</t-button>
    <t-button icon="settings">设置</t-button>
    <t-button icon="success">成功</t-button>
    <t-button icon="error">警告</t-button>
    <t-button icon="download">下载</t-button>
    <t-button icon="down" iconPosition="right">更多</t-button>

  </div>
</template>

<script>
import TButton from "../../../../src/components/button/Button.vue";
import "../../../../src/components/svg";
export default {
  components: {
    TButton,
  },

};
</script>