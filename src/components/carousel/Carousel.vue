<!-- author: 大冰 -->
<template>
  <div class="carousel">
    <div class="carousel-window">
      <div class="carousel-wrapper">
        <slot></slot>
      </div>
    </div>

    <div class="carousel-dots">
        <span v-for="n in childrenLength" :key='n' :class="{active: selectedIndex === n - 1}"
        @click="selectDots(n-1)">
            {{n}}
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TCarousel",

  props: {
    selected: {
      type: String,
      default: "",
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
  },
  
  data() {
      return {
          childrenLength: 0
      }
  },

  mounted() {
    this.updateChildren();
    this.playAutomatically(); // 调用自动播放
    this.childrenLength = this.$children.length; //获取子组件，提供多少个dots
  },

  updated() {
    // 监听selected变化时更新selected
    this.updateChildren();
  },

  computed: {
      selectedIndex() {
          return this.names.indexOf(this.selected || 0)
      },
      names() {
          return this.$children.map(vm => vm.name)
      }
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
        vm.selected = selected;

        // 加入反向动画
        let newIndex = this.names.indexOf(selected)
        let oldIndex = this.names.indexOf(vm.name)
        vm.reverse = newIndex > oldIndex ? false : true
      });
    },

    // 自动播放
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected());

      // 递归方式模拟setInterval
     // 正向
    //   let run = () => {
    //     console.log(index);
    //     if (index === names.length) {
    //       index = 0;
    //     }
    //     this.$emit("update:selected", names[index + 1]); // 更改selected属性
    //     index += 1;
    //     setTimeout(run, 3000);
    //   };
    //   反向
    let run = () => {
        console.log(index);
        let newIndex = index - 1
        // if(newIndex === -1) {
        //     newIndex = names.length -1
        // }
        // if(newIndex === names.length) {
        //     newIndex = 0
        // }
        this.$emit("update:selected", this.names[newIndex]); // 更改selected属性
        setTimeout(run, 3000);
      };
      // 开始也延迟3s再调用
    //   setTimeout(run, 3000);
    },

    // 点击dots
    selectDots(index) {
        this.$emit("update:selected", this.names[index]); // 更改selected属性
    },
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

  &-dots{
      > span {
          &.active{
              background: red;
          }
      }
  }
}
</style>