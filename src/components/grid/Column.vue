<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (val) => {
  let keys = Object.keys(val);
  let vaild = true;
  keys.forEach((item) => {
    if (["span", "offset"].indexOf(item) === -1) vaild = false;
  });
  return vaild;
};

export default {
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    },

  },

  data() {
    return {
      gutter: 0,
    };
  },

  methods: {

      createClass(obj, str = '') {
          if(!obj) return []
          let arr = []
          if(obj.span) {
              arr.push(`col-${str}${obj.span}`)
          }
          if(obj.offset) {
              arr.push( `offset-${str}${obj.offset}`)
          }
          return arr
      }
  },

  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
    colClasses() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let createClass = this.createClass
      return [
        ... createClass({span, offset}),
        ... createClass(ipad, 'ipad-'),
        ... createClass(narrowPc, 'narrowPc-'),
        ... createClass(pc, 'pc-'),
        ... createClass(widePc, 'widePc-'),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  @for $n from 1 through 24 {
    &.offset-#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }

    /**ipad */
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  /**narrow-pc */
  @media (min-width: 769px) {
    $class-prefix: col-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  /**pc */
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  /**wide-pc */
  @media (min-width: 1201px) {
    $class-prefix: col-widePc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-widePc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

}
</style>