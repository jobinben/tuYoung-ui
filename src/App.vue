<template>
  <div id="app">

    <t-collapse style="margin: 5em;" single selected="2">
      <t-collapse-item title="标题1" name="1">内容1</t-collapse-item>
      <t-collapse-item title="标题2" name="2">内容2</t-collapse-item>
      <t-collapse-item title="标题3" name="3">内容3</t-collapse-item>
      <t-collapse-item title="标题4" name="4">内容4</t-collapse-item>
    </t-collapse>
    
    

    <t-tabs :selected.sync="selectedTab">
      <!-- <t-tabs :selected="selectedTab" @update:selectedTab="selectedTab=$event"> -->

      <t-tabs-head>
        <template slot="actions">
          <t-button>设置</t-button>
        </template>
        <t-tabs-item name="front"><t-icon name="settings"></t-icon> 前端 </t-tabs-item>
        <t-tabs-item name="back" disabled> 后端 </t-tabs-item>
        <t-tabs-item name="stack"> 全栈 </t-tabs-item>
        
      </t-tabs-head>

      <t-tabs-body>
        <t-tabs-pane name="front"> 前端路线 </t-tabs-pane>
        <t-tabs-pane name="back"> 后端战略 </t-tabs-pane>
        <t-tabs-pane name="stack"> 全栈圈子 </t-tabs-pane>
      </t-tabs-body>
    </t-tabs>

    <t-row>
      <t-col span="24" :ipad="{ span: 12 }" :narrowPc="{ span: 8 }">
        <div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div>
      </t-col>
      <t-col span="24" :ipad="{ span: 12 }" :narrowPc="{ span: 8 }">
        <div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div>
      </t-col>
      <t-col span="24" :ipad="{ span: 12 }" :narrowPc="{ span: 8 }">
        <div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div>
      </t-col>
      <t-col span="24" :ipad="{ span: 12 }" :narrowPc="{ span: 8 }">
        <div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div>
      </t-col>
      <t-col span="24" :ipad="{ span: 12 }" :narrowPc="{ span: 8 }">
        <div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div>
      </t-col>
      <t-col span="24" :ipad="{ span: 12 }" :narrowPc="{ span: 8 }">
        <div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div>
      </t-col>
    </t-row>

    <t-row>
      <t-col span="12"
        ><div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div></t-col
      >
      <t-col span="12"
        ><div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div></t-col
      >
    </t-row>

    <t-row align="center">
      <t-col span="4"
        ><div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div></t-col
      >
      <t-col span="4"
        ><div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div></t-col
      >
      <t-col span="4"
        ><div style="background: skyblue; border: 1px solid red; height: 100px">
          1
        </div></t-col
      >
    </t-row>

    <t-popover style="margin-left: 10px" position="top">
      <template slot="content">
        <div>this is a popover! sometiems naive.</div>
      </template>
      <t-button>上面</t-button>
    </t-popover>

    <t-popover style="margin-left: 10px" position="bottom">
      <template slot="content">
        <div>this is a popover! sometiems naive.</div>
      </template>
      <t-button>下面</t-button>
    </t-popover>

    <t-popover style="margin-left: 10px" position="left">
      <template slot="content">
        <div>this is a popover! sometiems naive.</div>
      </template>
      <t-button>左边</t-button>
    </t-popover>

    <t-popover style="margin-left: 10px" position="right">
      <template slot="content">
        <div>this is a popover! sometiems naive.</div>
      </template>
      <t-button>右边</t-button>
    </t-popover>

    <t-popover style="margin-left: 10px" position="top" trigger='hover'>
      <template slot="content">
        <div>this is a popover! sometiems naive.</div>
      </template>
      <t-button>上面</t-button>
    </t-popover>

    <t-popover style="margin-left: 10px" position="bottom" trigger='hover'>
      <template slot="content">
        <div>this is a popover! sometiems naive.</div>
      </template>
      <t-button>下面</t-button>
    </t-popover>

    <t-popover style="margin-left: 10px" position="left" trigger='hover'>
      <template slot="content">
        <div>this is a popover! sometiems naive.</div>
      </template>
      <t-button>左边</t-button>
    </t-popover>

    <t-popover style="margin-left: 10px" position="right" trigger='hover'>
      <template slot="content">
        <div>this is a popover! sometiems naive.</div>
      </template>
      <t-button>右边</t-button>
    </t-popover>

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
      <t-button @click="add('top')">Default</t-button>
      <t-button
        @click="add('middle')"
        style="margin-left: 1em"
        type="primary"
        icon="settings"
        >Primary</t-button
      >
      <t-button @click="add('bottom')" style="margin-left: 1em" type="info"
        >Info</t-button
      >
      <t-button @click="add('center')" style="margin-left: 1em" type="success"
        >Success</t-button
      >
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
import TRow from "./components/grid/Row.vue";
import TCol from "./components/grid/Column.vue";
import TTabs from "./components/tabs/tabs.vue";
import TTabsBody from "./components/tabs/tabs-body.vue";
import TTabsHead from "./components/tabs/tabs-head.vue";
import TTabsItem from "./components/tabs/tabs-item.vue";
import TTabsPane from "./components/tabs/tabs-pane.vue";
import TPopover from "./components/popover/Popover.vue";
import TCollapse from "./components/collapse/Collapse.vue"
import TCollapseItem from "./components/collapse/CollapseItem.vue"

export default {
  name: "App",
  components: {
    HelloWorld,
    TButton,
    TButtonGroup,
    TInput,
    TRow,
    TCol,
    TTabs,
    TTabsBody,
    TTabsHead,
    TTabsItem,
    TTabsPane,
    TPopover,
    TCollapse,
    TCollapseItem
  },

  data() {
    return {
      msg: "hello world",
      selectedTab: 'stack'
    };
  },
  methods: {
    add(position) {
      this.$showToast({
        title: `toast is goods ${parseInt(Math.random() * 100)}`,
        position,
        autoClose: true,
        showClose: true,
        duration: 5000,
        closeText: "Close",

        callback(vm) {
          console.log(123);
          console.log(vm);
        },
      });
    },
  },
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

</style>
