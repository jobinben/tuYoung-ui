---
title: 折叠面板 Collapse
---
# 折叠面板 Collapse

我看到它总被用在界面边栏的控制面板上。


## 基础用法


<ClientOnly>
<Collapse-demo/>
</ClientOnly>

::: details 点击查看代码

```vue
<t-collapse :selected="['2']">
      <t-collapse-item title="title01" name="1">内容1</t-collapse-item>
      <t-collapse-item title="title02" name="2">内容2</t-collapse-item>
      <t-collapse-item title="title03" name="3">内容3</t-collapse-item>
      <t-collapse-item title="title04" name="4">内容4</t-collapse-item>
</t-collapse>
```
:::

## 手风琴模式

<ClientOnly>
<Collapse-demo-single/>
</ClientOnly>

::: details 点击查看代码

```vue
<t-collapse single>
      <t-collapse-item title="title01" name="1">内容1</t-collapse-item>
      <t-collapse-item title="title02" name="2">内容2</t-collapse-item>
      <t-collapse-item title="title03" name="3">内容3</t-collapse-item>
      <t-collapse-item title="title04" name="4">内容4</t-collapse-item>
</t-collapse>
```
:::
## Props

### Collapse Props

| 名称 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- |  --- | --- |
| single | `boolean`| `true` \| `false` | `false`  | 是否只允许展开一个面板 |
| selected | `array` |`*` | `[]` | 选择展开的面板 |

### CollapseItem Props

| 名称 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- |  --- | --- |
| title | `string`| `*` | `undefined`  | 名称 `required` |
| name | `string` |`*` | `undefined` | 标题 `required` |