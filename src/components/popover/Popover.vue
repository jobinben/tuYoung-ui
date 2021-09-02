<!-- author: 大冰 -->
<template>
  <div class="popover" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "TPopover",

  props: {
    position: {
      type: String,
      default: "top",
      validator: (val) =>
        ["top", "bottom", "left", "right"].indexOf(val) !== -1,
    },

    trigger: {
      type: String,
      default: "click",
      validator: (val) => ["click", "hover"].indexOf(val) !== -1,
    },
  },

  data() {
    return {
      visible: false,
    };
  },

  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      }
      return "mouseenter";
    },

    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      }
      return "mouseleave";
    },
  },

  mounted() {
    this.addPopoverListeners()
  },

  beforeDestroy() {
    this.removePopoverListeners()
  },

  methods: {
    addPopoverListeners() {
      // 这里添加的监听事件需要销毁
      // 因为我们并没有通过vue的@click在元素绑定事件 需要自行destroy
      if (this.trigger === "click") {
        this.$refs.popover.addEventListener("click", this.onClick);
      } else {
        this.$refs.popover.addEventListener("mouseenter", this.open);
        this.$refs.popover.addEventListener("mouseleave", this.close);
      }
    },

    removePopoverListeners() {
      // 销毁掉事件 防止内存泄漏
      if (this.trigger === "click") {
        this.$refs.popover.removeEventListener("click", this.onClick);
      } else {
        this.$refs.popover.removeEventListener("mouseenter", this.open);
        this.$refs.popover.removeEventListener("mouseleave", this.close);
      }
    },

    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      const { width, height, left, top } =
        triggerWrapper.getBoundingClientRect();
      const { height: height2 } = contentWrapper.getBoundingClientRect();
      let positionObject = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        bottom: {
          left: left + window.scrollX,
          top: top + window.scrollY + height,
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY + (height - height2) / 2,
        },
        right: {
          left: left + window.scrollX + width,
          top: top + window.scrollY + (height - height2) / 2,
        },
      };
      contentWrapper.style.left = positionObject[this.position].left + "px";
      contentWrapper.style.top = positionObject[this.position].top + "px";
    },

    getRefs(ref, event) {
      // 获取ref对象元素
      return (
        this.$refs[ref] &&
        (this.$refs[ref] === event.target ||
          this.$refs[ref].contains(event.target))
      );
    },

    onClickDocument(event) {
      // 当前点击元素
      !this.getRefs("popover", event) &&
        !this.getRefs("contentWrapper", event) &&
        this.close();
    },

    open() {
      // 渲染内容
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },

    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },

    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) {
          this.close();
          return;
        }
        this.open();
      }
    },
  },
};
</script>
<style lang='scss' scoped>
$border-radius: 4px;
$border-color: #fff;
.popover {
  display: inline-block;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  box-shadow: 0 0 20px 9px rgba($color: #bbb, $alpha: 0.3);
  padding: 0.5em 1em;
  max-width: 20em;
  background: #fff;
  word-break: break-all;

  &::before {
    content: "";
    display: block;
    border: 9px solid transparent;
    position: absolute;
    left: auto;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      border-top-color: #fff;
      top: 100%;
    }
  }

  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: #fff;
      bottom: 100%;
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      border-left-color: #fff;
      left: 100%;
    }
  }

  &.position-right {
    margin-left: 10px;
    &::before {
      border-right-color: #fff;
      right: 100%;
    }
  }

  // &::after{
  //   content: '';
  //   display: block;
  //   border: 9px solid transparent;
  //   border-top-color: #fff;
  //   position: absolute;
  //   top: calc(100% - 1px);
  //   left: auto;
  // }
}
</style>