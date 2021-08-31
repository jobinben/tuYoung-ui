<!-- author: 大冰 -->
<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "tuYoungCollapse",

  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
    },
  },

  provide() {
    return {
      eventBus: this.eventBus,
    };
  },

  data() {
    return {
      eventBus: new Vue(),
    };
  },

  mounted() {
    this.emitEventBus();
  },

  methods: {
    emitEventBus() {
      // 初始化默认选项
      this.eventBus.$emit("update:selected", this.selected);
      // 接收item传递过来的事件
      this.eventBus.$on('update:addSelected', (name) => {
          console.log('add')
          let selectedCopy = JSON.parse(JSON.stringify(this.selected))
          if(this.single) {
              selectedCopy = [name]
          }else {
              selectedCopy.push(name)
          }

          this.eventBus.$emit('update:selected', selectedCopy)
          this.$emit('update:selected', selectedCopy)
      })
      // 接收item传递，移除selected
      this.eventBus.$on('update:removeSelected', (name) => {
          console.log('remove')
          let selectedCopy = JSON.parse(JSON.stringify(this.selected))
          let index = selectedCopy.indexOf(name)
          selectedCopy.splice(index, 1)
          this.eventBus.$emit('update:selected', selectedCopy)
          this.$emit('update:selected', selectedCopy)
      })

    },
  },
};
</script>
<style lang='scss' scoped>
$grey: #bbb;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>