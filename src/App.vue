<template>
  <div id="app">
    <t-button >Default</t-button>
    <t-button style="margin-left:1em;" type="primary" icon="settings">Primary</t-button>
    <t-button style="margin-left:1em;" type="info">Info</t-button>
    <t-button style="margin-left:1em;" type="success">Success</t-button>
    <t-button style="margin-left:1em;" type="warning">Warning</t-button>
    <t-button style="margin-left:1em;" type="error">Error</t-button>


    

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TButton from "./components/Button.vue"
export default {
  name: 'App',
  components: {
    HelloWorld,
    TButton
  }
}
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
            --border-color: #BBB;
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
