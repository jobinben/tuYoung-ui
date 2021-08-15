<template>
  <div id="app">
    <t-input placeholder="Input"></t-input>
    <t-input style="margin-top: 1em"  placeholder="Don't click Input" disabled></t-input>
    <t-input style="margin-top: 1em"  placeholder="Input a number" type="number"></t-input>



    <div style="margin-top: 1em">
      <t-button>Default</t-button>
      <t-button style="margin-left: 1em" type="primary" icon="settings"
        >Primary</t-button
      >
      <t-button style="margin-left: 1em" type="info">Info</t-button>
      <t-button style="margin-left: 1em" type="success">Success</t-button>
      <t-button style="margin-left: 1em" type="warning">Warning</t-button>
      <t-button style="margin-left: 1em" type="error">Error</t-button>

      <t-button-group style="margin-left: 1em">
        <t-button type="default" icon="left">Back</t-button>
        <t-button type="info">Info</t-button>
        <t-button type="default" icon="right" iconPosition="right"
          >Next</t-button
        >
      </t-button-group>
    </div>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import "./components/svg";
import HelloWorld from "./components/HelloWorld.vue";
import TButton from "./components/Button.vue";
import TButtonGroup from "./components/ButtonGroup.vue";
import TInput from "./components/Input.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TButton,
    TButtonGroup,
    TInput,
  },
};
</script>

<style lang="less">
:root {
  /* 这里定义通用一些变量 */
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #bbb;
  --border-color-hover: #666;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
