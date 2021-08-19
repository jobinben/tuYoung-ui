<template>
  <div id="app">
    <t-layout style="height:100vh;border: 1px solid red">
      <t-sider>sider</t-sider>
      <t-layout>
        <t-header class="test">header</t-header>
        <t-content class="test">content</t-content>
        <t-footer class="test">footer</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>

<script>
import TLayout from "./components/layout/Layout.vue";
import THeader from "./components/layout/Header.vue";
import TContent from "./components/layout/Content.vue";
import TFooter from "./components/layout/Footer.vue";
import TSider from "./components/layout/Sider.vue";

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

<style>
*{
    margin: 0;
}
.test {
  border: 1px solid springgreen;
}
.t-sider {
  width: 200px;
  background: skyblue;

}
.t-header {
  background: #ccc;
  height: 100px;
}
.t-content {
  flex-grow: 1;
}
.t-footer {
  background: #ccc;
  height: 50px;
}
</style>