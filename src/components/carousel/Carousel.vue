<!-- author: 大冰 -->
<template>
  <div
    class="carousel"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="carousel-window">
      <div class="carousel-wrapper">
        <slot></slot>
      </div>
    </div>

    <div class="carousel-dots">
      <span @click="onClickPre">
        <t-icon name="left"></t-icon>
      </span>
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{ active: selectedIndex === n - 1 }"
        @click="selectDots(n - 1)"
      >
        {{ n }}
      </span>

      <span @click="onClickNext">
        <t-icon name="right"></t-icon>
      </span>
    </div>
  </div>
</template>

<script>
import TIcon from "../icon/Icon.vue";
export default {
  name: "TCarousel",
  components: {
    TIcon,
  },
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
    interval: {
      // 自动播放间隔
      type: Number,
      default: 3000,
    },
  },

  data() {
    return {
      childrenLength: 0,
      preSelectedIndex: undefined,
      timerId: null,
      startTouch: null,
    };
  },

  mounted() {
    this.updateChildren();
    this.playAutomatically(); // 调用自动播放
    this.childrenLength = this.getChildrens.length; //获取子组件，提供多少个dots
    this.preSelectedIndex = this.selectedIndex;
  },

  updated() {
    // 监听selected变化时更新selected
    this.updateChildren();
  },

  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected);
      return index === -1 ? 0 : index;
    },
    names() {
      return this.getChildrens.map((vm) => vm.name);
    },

    getChildrens() {
      return this.$children.filter(
        (vm) => vm.$options.name === "TCarouselItem"
      );
    },
  },

  methods: {
    onClickPre() {
      this.selectDots(this.selectedIndex - 1);
    },

    onClickNext() {
      this.selectDots(this.selectedIndex + 1);
    },

    getSelected() {
      // 获取第一个孩子结点的name 当作默认显示
      let first = this.getChildrens[0];
      //let selected = this.selected || first.name;
      return this.selected || first.name;
    },

    updateChildren() {
      // 获取第一个孩子结点的name 当作默认显示
      let selected = this.getSelected();
      // 给子组件的selected属性赋值为当前选中的值
      this.getChildrens.forEach((vm) => {
        // 加入无缝正反向动画
        this.ReverseAnimation(vm);

        this.$nextTick(() => {
          // 解决更新不及时的bug导致动画的类未消失
          vm.selected = selected;
        });
      });
    },

    ReverseAnimation(childrenNode) {
      let reverse = this.selectedIndex > this.preSelectedIndex ? false : true;
      // if (this.timerId) {// 这条判断会导致通过按钮前进后退不是无缝
      // 没有自动轮播时，让无缝跳转正常。
      if (
        this.preSelectedIndex === this.getChildrens.length - 1 &&
        this.selectedIndex === 0
      ) {
        // 正向情况下的无缝 3 -> 0
        reverse = false;
      }
      if (
        this.preSelectedIndex === 0 &&
        this.selectedIndex === this.getChildrens.length - 1
      ) {
        // 反向情况下的无缝  0 -> 3
        reverse = true;
      }
      // }
      childrenNode.reverse = reverse;
    },

    // 自动播放
    playAutomatically() {
      if(!this.autoPlay) return;
      //   正反向关于index减还是加
      if (this.timerId) return;
      let run = () => {
        let index = this.names.indexOf(this.getSelected()); //获取当前的index
        let newIndex = this.controlDirection(index, this.reverse); // 控制正反
        this.selectDots(newIndex); // 更改selected属性
        this.timerId = setTimeout(run, this.interval);
      };
      // 开始也延迟3s再调用
      this.timerId = setTimeout(run, this.interval);
    },

    // 点击dots
    selectDots(newIndex) {
      this.preSelectedIndex = this.selectedIndex;
      if (newIndex === -1) {
        newIndex = this.names.length - 1;
      }
      if (newIndex === this.names.length) {
        newIndex = 0;
      }
      this.$emit("update:selected", this.names[newIndex]); // 更改selected属性
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
      this.pause(); // 滑动时暂停自动播放
      this.startTouch = e.touches[0];
    },

    onTouchEnd(e) {
      let { clientX: x1, clientY: y1 } = this.startTouch;
      let { clientX: x2, clientY: y2 } = e.changedTouches[0];
      let sinA = this.getSlope(x1, y1, x2, y2);
      // sinA = 30° = 1/2
      if (sinA < 0.5) {
        if (x1 > x2) {
          this.selectDots(this.selectedIndex + 1);
        } else if (x1 < x2) {
          this.selectDots(this.selectedIndex - 1);
        }
      }

      this.playAutomatically(); // 滑动结束后自动播放
    },

    // 计算斜率算法 sin 对边比斜边
    getSlope(x1, y1, x2, y2) {
      // 斜边的距离
      let slopeDistance = Math.sqrt((x2 - x1) ** 2, (y2 - y1) ** 2);
      let oppositeDistance = Math.abs(y2 - y1);
      let sinA = oppositeDistance / slopeDistance;
      return (sinA = !sinA ? 0 : sinA);
    },
  },
};
</script>
<style lang='scss' scoped>
.carousel {
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
      &:hover {
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