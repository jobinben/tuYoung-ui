<!-- author: 大冰 -->
<template>
  <div class="carousel" 
  @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
  @touchstart="onTouchStart"
  @touchend="onTouchEnd"
  >
    <div class="carousel-window">
      <div class="carousel-wrapper">
        <slot></slot>
      </div>
    </div>

    <div class="carousel-dots">
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{ active: selectedIndex === n - 1 }"
        @click="selectDots(n - 1)"
      >
        {{ n }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TCarousel",

  props: {
    selected: {
      // 默认选中
      type: String,
      default: undefined,
    },
    autoPlay: {
      // 是否自动播放
      type: Boolean,
      default: true,
    },
    reverse: {
      // 是否反向播放
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      childrenLength: 0,
      preSelectedIndex: undefined,
      timerId: null,
      startTouch: null
    };
  },

  mounted() {
    this.updateChildren();
    this.playAutomatically(); // 调用自动播放
    this.childrenLength = this.$children.length; //获取子组件，提供多少个dots
    this.preSelectedIndex = this.selectedIndex;
  },

  updated() {
    // 监听selected变化时更新selected
    this.updateChildren();
  },

  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected)
      console.log(index)
      return index = index === -1 ? 0 : index;
    },
    names() {
      return this.$children.map((vm) => vm.name);
    },

  },

  methods: {

    getSelected() {
      // 获取第一个孩子结点的name 当作默认显示
      let first = this.$children[0];
      //let selected = this.selected || first.name;
      return this.selected || first.name;
    },

    updateChildren() {
      // 获取第一个孩子结点的name 当作默认显示
      let selected = this.getSelected();
      // 给子组件的selected属性赋值为当前选中的值
      this.$children.forEach((vm) => {
        this.$nextTick(() => {
          // 解决更新不及时的bug导致动画的类未消失
          vm.selected = selected;
        });
        // 加入无缝正反向动画
        this.ReverseAnimation(vm)
      });
    },

    ReverseAnimation(childrenNode) {
      let reverse = this.selectedIndex > this.preSelectedIndex ? false : true;
      if (this.timerId) {
        // 没有自动轮播时，让无缝跳转正常。
        if (this.preSelectedIndex === this.$children.length - 1 &&this.selectedIndex === 0) {
          // 正向情况下的无缝 3 -> 0
          reverse = false;
        }
        if ( this.preSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
          // 反向情况下的无缝  0 -> 3
          reverse = true;
        }
      }
      childrenNode.reverse = reverse;
    },

    // 自动播放
    playAutomatically() {
      //   正反向关于index减还是加
      if (this.timerId) return;
      let run = () => {
        let index = this.names.indexOf(this.getSelected()); //获取当前的index
        let newIndex = this.controlDirection(index, this.reverse); // 控制正反
        if (newIndex === -1) {
          newIndex = this.names.length - 1;
        }
        if (newIndex === this.names.length) {
          newIndex = 0;
        }
        this.selectDots(newIndex); // 更改selected属性
        this.timerId = setTimeout(run, 3000);
      };
      // 开始也延迟3s再调用
      this.timerId = setTimeout(run, 3000);
    },

    // 点击dots
    selectDots(index) {
      this.preSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]); // 更改selected属性
    },

    //暂停
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    },

    //鼠标移入暂停
    onMouseEnter() {
      this.pause();
    },

    //移除播放
    onMouseLeave() {
      this.playAutomatically();
    },

    //控制方向
    controlDirection(index, reverse = false) {
      return reverse ? index - 1 : index + 1;
    },

    // 支持手机滑动
    onTouchStart(e) {
      this.pause() // 滑动时暂停自动播放
      console.log(e.touches[0])
      this.startTouch = e.touches[0]
    },

    onTouchEnd(e) {
      console.log(e.changedTouches[0])
      this.playAutomatically() // 滑动结束后自动播放
    }

  },
};
</script>
<style lang='scss' scoped>
.carousel {
  border: 1px solid red;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }

  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      margin: 0 4px;
      background: #ddd;
      &:hover{
        cursor: pointer;
      }
      &.active {
        background: black;
        color: white;
      }
    }
  }
}
</style>