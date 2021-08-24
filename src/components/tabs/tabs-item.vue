<template>
  <div class="tabsItem" @click="xxx" :class="classes">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "tuYoungTabsItem",


    // 注入创建的事件中心
    inject: ['eventBus'],


    props: { // 需要用户(前端开发者) 传值
        name: {
            type: String
        },
       
    },

    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },

    data() { // 不需要用户传值， 自身维护值
        return {
            active: false
        }
    },

    created() {
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
        })
    },

    methods: {
        xxx() {
            this.eventBus.$emit('update:selected', this.name, this)
        }
    }
}
</script>

<style lang="scss" scoped>

.tabsItem{
    $blue: #2080f0;
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
        color: $blue;
    }
}

</style>
