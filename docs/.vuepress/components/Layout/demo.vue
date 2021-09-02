<!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
    <t-layout class="parent">
      <t-header class="header">header</t-header>
      <t-content class="content">content</t-content>
      <t-footer class="footer">footer</t-footer>
    </t-layout>

    <t-layout class="parent">
      <t-sider class="sider">sider</t-sider>
      <t-layout>
        <t-header class="header">header</t-header>
        <t-content class="content">content</t-content>
        <t-footer class="footer">footer</t-footer>
      </t-layout>
    </t-layout>

    <t-layout class="parent">
      <t-header class="header">header</t-header>
      <t-layout>
        <t-sider class="innerSider">sider</t-sider>
        <t-content class="innerContent">content</t-content>
      </t-layout>
      <t-footer class="footer">footer</t-footer>
    </t-layout>
  </div>
</template>

<script>
import TLayout from "../../../../src/components/layout/Layout.vue";
import THeader from "../../../../src/components/layout/Header.vue";
import TContent from "../../../../src/components/layout/Content.vue";
import TFooter from "../../../../src/components/layout/Footer.vue";
import TSider from "../../../../src/components/layout/Sider.vue";

export default {
  components: {
    TLayout,
    THeader,
    TContent,
    TFooter,
    TSider,
  },
};
</script>

<style lang="scss" scoped>
.parent {
  height: 200px;
  color: #fff;
  text-align: center;
  &:not(:first-child) {
    margin-top: 50px;
  }
}
.sider {
  background: #108ee9;
  width: 100px;
  opacity: 0.8;
  line-height: 200px;
}
.header {
  height: 50px;
  background: #7dbcea;
  line-height: 50px;
}
.content {
  height: 100px;
  background: #108ee9;
  line-height: 100px;
}
.footer {
  height: 50px;
  line-height: 50px;
  background: #7dbcea;
}
.innerSider {
  background: #108ee9;
  width: 200px;
  opacity: 0.8;
  line-height: 100px;
}
.innerContent {
  height: 100px;
  background: #108ee9;
  line-height: 100px;
  flex-grow: 1;
}
</style>