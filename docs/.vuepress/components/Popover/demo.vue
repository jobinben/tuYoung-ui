
    <!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
    <t-popover position="top">
      <template slot="content">
        <div>I am here!</div>
      </template>
      <t-button>上面</t-button>
    </t-popover>

    <t-popover  position="bottom">
      <template slot="content">
        <div>I am here!</div>
      </template>
      <t-button>下面</t-button>
    </t-popover>

    <t-popover  position="left">
      <template slot="content">
        <div>I am here!</div>
      </template>
      <t-button>左边</t-button>
    </t-popover>

    <t-popover position="right">
      <template slot="content">
        <div>I am here!</div>
      </template>
      <t-button>右边</t-button>
    </t-popover>
  </div>
</template>

<script>
import TPopover from "../../../../src/components/popover/Popover.vue"
import TButton from "../../../../src/components/button/Button.vue"
export default {
  components: {
    TPopover,
    TButton
  },
};
</script>