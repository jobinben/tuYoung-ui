---
title: 级联选择  Cascader
---

# 级联选择  Cascader

用来选一些树型信息。

## 基础用法


<ClientOnly>
<Cascader-demo/>
</ClientOnly>


::: details 点击查看代码

```vue
<template>
    <div style="padding: 1em">
      <p>{{selected.map(item=>item.name)}}</p>
      <t-cascader :source="source" popover-height="200px"
        :selected.sync="selected"
      ></t-cascader>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],

      source: [
      {
        name: "广东省",
        children: [
          {
            name: '汕尾市',
            children: [
              {name: '城区'},
              {name : '陆丰'},
              {name : '海丰'},
              {name : '陆河'},
            ]
          },
          {
            name: '珠海市',
            children: [
              {name : '红旗镇'},
              {name: '金湾区'},
            ]
          }
        ]
      },
      {
        name: '福建省',
        children: [
          {
          name: "泉州市",
          children: [
            {name: '丰泽区'}
          ]
        }
        ]
      }
    ]
    }
  }
}
</script>
```
:::


## Props

### Cascader Props

| 名称 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- |  --- | --- |
| source | `array<sourceOption>`| `-`  | `[]`  | 可选项数据源 |
| popoverHeight | `string` |`*` | `-` | 展开的面板的高度 |
| selected | `array` |`*` | `[]` | 选中后的结果 |

#### sourceOption Properties

| 名称 | 类型 | 说明 |
| --- | --- |--- |
| name | `string`|  展示的标题 |
| children | `array<sourceOption>` | 该项的子项数据 |