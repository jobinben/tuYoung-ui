<!-- author: 大冰 -->
<template>
    <div id="app">
        <t-button>按钮</t-button>
        <t-input></t-input>
    </div>
</template>

<script>
export default {
  name: "tuYoung",
  methods: {
    show(){
      console.log('this', this)
      this.$showToast({
        title: 'hello',
      })
    }
  }
}
</script>
<style lang='scss' scoped>

</style>