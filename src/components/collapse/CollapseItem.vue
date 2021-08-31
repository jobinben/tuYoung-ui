<!-- author: 大冰 -->
<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tuYoungCollapseItem",
  inject: ["eventBus"],
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
        type: String,
        required: true
    }
  },

  data() {
    return {
      open: false,
    };
  },

  mounted() {
      this.onEventBus()
  },
  methods: {
    onEventBus() {
      this.eventBus &&
        this.eventBus.$on("update:selected", (name) => {
          if (name !== this.name) {
            this.close();
          }else {
            this.show()
          }

        });
    },

    toggle() {
      if (this.open) {
        this.open = false;
      } else {
        this.eventBus && this.eventBus.$emit("update:selected", this.name);
      }
    },

    close() {
      this.open = false
    },

    show() {
        this.open = true
    }
  },
};
</script>
<style lang='scss' scoped>
$grey: #bbb;
$border-radius: 4px;
.collapseItem {
  > .title {
    border: 1px solid $grey;
    margin: -1px -1px 0 -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 0.5em;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }

  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      margin-bottom: -1px;
    }
  }

  > .content {
    padding: 1em;
  }
}
</style>