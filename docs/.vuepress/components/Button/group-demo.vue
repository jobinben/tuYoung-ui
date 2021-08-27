<!-- author: 大冰 -->
<template>
  <div>
    <t-button-group>
        <t-button icon="left">Back</t-button>
        <t-button>More</t-button>
        <t-button icon="right" iconPosition="right">Next</t-button>
      </t-button-group>

      <t-button-group>
        <t-button type="default" icon="left">上一页</t-button>
        <t-button type="default" icon="right" iconPosition="right">下一页</t-button>
      </t-button-group>
  </div>
</template>

<script>
import TButtonGroup from "../../../../src/components/button/ButtonGroup.vue"
import TButton from "../../../../src/components/button/Button.vue";
import "../../../../src/components/svg";
export default {
  components: {
    TButtonGroup,
    TButton,
  },


 
};
</script>