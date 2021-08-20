<template>
  <div id="app">
    <t-row>
      
      <t-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}">
        <div style="background:skyblue; border: 1px solid red; height: 100px;">1</div>
      </t-col>
     <t-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}">
        <div style="background:skyblue; border: 1px solid red; height: 100px;">1</div>
      </t-col>
      <t-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}">
        <div style="background:skyblue; border: 1px solid red; height: 100px;">1</div>
      </t-col>
      <t-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}">
        <div style="background:skyblue; border: 1px solid red; height: 100px;">1</div>
      </t-col>
      <t-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}">
        <div style="background:skyblue; border: 1px solid red; height: 100px;">1</div>
      </t-col>
      <t-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}">
        <div style="background:skyblue; border: 1px solid red; height: 100px;">1</div>
      </t-col>


    </t-row>

    <t-row>
      <t-col span="12"><div style="background:skyblue; border: 1px solid red; height: 100px;">1</div></t-col>
      <t-col span="12"><div style="background:skyblue; border: 1px solid red; height: 100px;">1</div></t-col>
    </t-row>

    <t-row align="center">
      <t-col span="4"><div style="background:skyblue; border: 1px solid red; height: 100px;">1</div></t-col>
      <t-col span="4"><div style="background:skyblue; border: 1px solid red; height: 100px;">1</div></t-col>
      <t-col span=4><div style="background:skyblue; border: 1px solid red; height: 100px;">1</div></t-col>
    </t-row>

     



    <t-input placeholder="Input"></t-input>
    <t-input value="input value"></t-input>

    <t-input
      style="margin-left: 1em"
      placeholder="Don't click Input"
      disabled
    ></t-input>
    <t-input
      style="margin-left: 1em"
      placeholder="Input a number"
      type="number"
    ></t-input>
    <t-input
      style="margin-left: 1em"
      placeholder="Error Input"
      error="tips of error."
    ></t-input>
    <t-input
      style="margin-left: 1em"
      placeholder="Success Input"
      success="tips of success."
    ></t-input>

    <div>
      <t-input placeholder="v-model" v-model="msg"></t-input>
      <p>{{ msg }}</p>
    </div>

    <div style="margin-top: 1em">
      <t-button @click="add">Default</t-button>
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
import TButton from "./components/button/Button.vue";
import TButtonGroup from "./components/button/ButtonGroup.vue";
import TInput from "./components/input/Input.vue";
import TRow from "./components/grid/Row.vue"
import TCol from "./components/grid/Column.vue"

export default {
  name: "App",
  components: {
    HelloWorld,
    TButton,
    TButtonGroup,
    TInput,
    TRow,
    TCol
  },

  data() {
    return {
      msg: "hello world",
    };
  },
  methods: {
    add() {
      this.$showToast('Toast')
    },
  },
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
