<!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
    <t-row class="parent">
      <t-col span="10"><div class="item item-dark">col-10</div></t-col>
      <t-col span="12" offset="2"><div class="item item-light">col-12</div></t-col>
    </t-row>

    <t-row class="parent">
      <t-col span="6"><div class="item item-dark">col-6</div></t-col>
      <t-col span="8" offset="2"><div class="item item-light">col-12</div></t-col>
      <t-col span="8"><div class="item item-dark">col-12</div></t-col>
    </t-row>

    <t-row class="parent">
      <t-col span="6"><div class="item item-dark">col-6</div></t-col>
      <t-col span="6"><div class="item item-light">col-6</div></t-col>
      <t-col span="3"> <div class="item item-dark">col-3</div></t-col>
      <t-col span="6" offset="3"> <div class="item item-light">col-6</div></t-col>
    </t-row>

    <t-row class="parent">
      <t-col span="2"><div class="item item-dark">col-2</div></t-col>
      <t-col span="20" offset="2"><div class="item item-light">col-20</div></t-col>
    </t-row>
  </div>
</template>

<script>
import TRow from "../../../../src/components/grid/Row.vue"
import TCol from "../../../../src/components/grid/Column.vue"
export default {
  components: {
    TRow,
    TCol,
  },
};
</script>

<style scoped>
.parent{
    margin-top: 6px;
}
.item {
    height: 34px;
    color: #fff;
    text-align: center;
    line-height: 34px;
}
.item-dark{
    background: #3D8FEE;
}
.item-light{
    background: #7CB8FF;
}
</style>