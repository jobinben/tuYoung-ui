<template>
  <div class="t-toast">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "tuYoungToast",
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 1.5
        }
    },

    methods: {
        close() {
            this.$el.remove()
            this.$destroy()
        }
    },

    mounted() {
        if( this.autoClose) {
            setTimeout( () => {
                this.close()
            }, this.autoCloseDelay * 1000)
        }
    }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0, .65);
$toast-border-radius: 4px;
.t-toast {
    font-size: $font-size;
    color: #fff;
    background: $toast-bg;
    height: $toast-height;
    line-height: 1.8;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    border-radius: $toast-border-radius;
    box-shadow: 0 0 3px 0 rgba(0,0,0, .5);
    padding: 0 16px;
}


</style>