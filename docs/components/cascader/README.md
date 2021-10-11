---
title: 级联选择  Cascader
---

# 级联选择  Cascader

用来选一些树型信息。


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