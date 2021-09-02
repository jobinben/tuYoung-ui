<!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
    <ul class="icon-list">
      <li v-for="item in iconArray" :key="item.name">
        <span class="iconWrapper">
          <t-icon class="icon" :name="item.name"></t-icon>
          <span class="icon-name">{{ item.text }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import TIcon from "../../../../src/components/icon/Icon.vue";
import "../../../../src/components/svg";

export default {
  components: {
    TIcon,
  },

  data() {
    return {
      iconArray: [
        { name: "error", text: "i-error" },
        { name: "success", text: "i-success" },
        { name: "left", text: "i-left" },
        { name: "right", text: "i-right" },
        { name: "awesome", text: "i-awesome" },
        { name: "loading", text: "i-loading" },
        { name: "down", text: "i-down" },
        { name: "download", text: "i-download" },
        { name: "settings", text: "i-settings" },



      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.icon-list {
  overflow: hidden;
  list-style: none;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  padding: 0;
  li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 60px;
    line-height: 60px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
  }
}
.iconWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.icon {
  display: inline-flex;
}
.icon-name {
  display: inline-flex;
  align-items: center;
  height: 40%;
}
</style>