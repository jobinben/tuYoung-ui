<!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
    <t-tabs :selected.sync="selectedTab">
      <t-tabs-head>
        <t-tabs-item name="front"
          ><t-icon name="settings"></t-icon>&nbsp; 前端
        </t-tabs-item>
        <t-tabs-item name="back"> 后端 </t-tabs-item>
        <t-tabs-item name="stack"> 全栈 </t-tabs-item>
      </t-tabs-head>
      <t-tabs-body>
        <t-tabs-pane name="front"> 前端路线 </t-tabs-pane>
        <t-tabs-pane name="back"> 后端战略 </t-tabs-pane>
        <t-tabs-pane name="stack"> 全栈圈子 </t-tabs-pane>
      </t-tabs-body>
    </t-tabs>
  </div>
</template>

<script>
import TTabs from "../../../../src/components/tabs/tabs.vue";
import TTabsBody from "../../../../src/components/tabs/tabs-body.vue";
import TTabsHead from "../../../../src/components/tabs/tabs-head.vue";
import TTabsItem from "../../../../src/components/tabs/tabs-item.vue";
import TTabsPane from "../../../../src/components/tabs/tabs-pane.vue";
import TIcon from "../../../../src/components/icon/Icon.vue";
import "../../../../src/components/svg";

export default {
  components: {
    TTabs,
    TTabsBody,
    TTabsHead,
    TTabsItem,
    TTabsPane,
    TIcon,
  },
  data() {
    return {
      selectedTab: "back",
    };
  },
};
</script>
