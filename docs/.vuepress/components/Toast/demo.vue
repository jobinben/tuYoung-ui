<!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
    <t-button @click="onShow('top')">Top</t-button>
    <t-button @click="onShow('middle')">Middle</t-button>
    <t-button @click="onShow('bottom')">Bottom</t-button>
    <t-button @click="onShow('top', false)">无关闭按钮</t-button>
    <t-button @click="onShow('top')">有关闭按钮</t-button>
  </div>
</template>

<script>
import Vue from "vue";
import TButton from "../../../../src/components/button/Button.vue";
import ToastPlugin from "../../../../src/components/toast/toastPlugin";
// 安装Toast
Vue.use(ToastPlugin);

export default {
  components: {
    TButton,
  },

  methods: {
    onShow(position, hasClose = true) {
      this.$showToast({
        title: `This is a Toast`, // 显示标题
        position,                 // 显示位置
        autoClose: true,          // 是否自动关闭
        showClose: hasClose,      // 是否显示关闭按钮
        duration: 2000,           // 显示时间/单位(ms)
        closeText: "Close",       // 关闭按钮文本
        callback(vm) {            // 回调
          console.log('callback');
          console.log(vm);
        },
      });
    },
  },
};
</script>