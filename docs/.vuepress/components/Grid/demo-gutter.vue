<!-- author: 大冰 -->
<template>
  <div style="padding: 1em">
    <t-row class="parent" gutter="20">
      <t-col span="5"><div class="item item-dark">col-5</div></t-col>
      <t-col span="5"><div class="item item-light">col-5</div></t-col>
      <t-col span="5"> <div class="item item-dark">col-5</div></t-col>
      <t-col span="5"> <div class="item item-light">col-5</div></t-col>
    </t-row>
    
    <t-row class="parent" gutter="20">
      <t-col span="5"><div class="item item-dark">col-5</div></t-col>
      <t-col span="5"><div class="item item-light">col-5</div></t-col>
      <t-col span="5"> <div class="item item-dark">col-5</div></t-col>
      <t-col span="5"> <div class="item item-light">col-5</div></t-col>
    </t-row>

    <t-row class="parent" gutter="20">
      <t-col span="5"><div class="item item-dark">col-5</div></t-col>
      <t-col span="5"><div class="item item-light">col-5</div></t-col>
      <t-col span="5"> <div class="item item-dark">col-5</div></t-col>
      <t-col span="5"> <div class="item item-light">col-5</div></t-col>
    </t-row>

    <t-row class="parent" gutter="20">
      <t-col span="5"><div class="item item-dark">col-5</div></t-col>
      <t-col span="5"><div class="item item-light">col-5</div></t-col>
      <t-col span="5"> <div class="item item-dark">col-5</div></t-col>
      <t-col span="5"> <div class="item item-light">col-5</div></t-col>
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