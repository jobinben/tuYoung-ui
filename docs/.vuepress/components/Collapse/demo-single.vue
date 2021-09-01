<!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
    <t-collapse single>
      <t-collapse-item title="title01" name="1">内容1</t-collapse-item>
      <t-collapse-item title="title02" name="2">内容2</t-collapse-item>
      <t-collapse-item title="title03" name="3">内容3</t-collapse-item>
      <t-collapse-item title="title04" name="4">内容4</t-collapse-item>
    </t-collapse>
  </div>
</template>

<script>
import TCollapse from "../../../../src/components/collapse/Collapse.vue";
import TCollapseItem from "../../../../src/components/collapse/CollapseItem.vue";

export default {
  components: {
    TCollapse,
    TCollapseItem,
  },
  
};
</script>