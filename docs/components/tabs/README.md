---
title: 标签页 Tabs
---

# 标签页 Tabs

可以切换同区域的内容

## 基础用法

<ClientOnly>
<Tabs-demo/>
</ClientOnly>

```vue
<t-tabs :selected.sync="selectedTab">
    <t-tabs-head>
    <t-tabs-item name="front">前端 </t-tabs-item>
    <t-tabs-item name="back"> 后端 </t-tabs-item>
    <t-tabs-item name="stack"> 全栈 </t-tabs-item>
    </t-tabs-head>
    <t-tabs-body>
    <t-tabs-pane name="front"> 前端路线 </t-tabs-pane>
    <t-tabs-pane name="back"> 后端战略 </t-tabs-pane>
    <t-tabs-pane name="stack"> 全栈圈子 </t-tabs-pane>
    </t-tabs-body>
</t-tabs>
```

## 可禁用标签

<ClientOnly>
<Tabs-demo-disabled/>
</ClientOnly>

```vue
<t-tabs :selected.sync="selectedTab">
    <t-tabs-head>
    <t-tabs-item name="front">前端 </t-tabs-item>
    <t-tabs-item name="back" disabled> 后端 </t-tabs-item>
    <t-tabs-item name="stack"> 全栈 </t-tabs-item>
    </t-tabs-head>
    <t-tabs-body>
    <t-tabs-pane name="front"> 前端路线 </t-tabs-pane>
    <t-tabs-pane name="back"> 后端战略 </t-tabs-pane>
    <t-tabs-pane name="stack"> 全栈圈子 </t-tabs-pane>
    </t-tabs-body>
</t-tabs>
```


## 图标标签

<ClientOnly>
<Tabs-demo-icon/>
</ClientOnly>

```vue
<t-tabs :selected.sync="selectedTab">
    <t-tabs-head>
    <t-tabs-item name="front"
        ><t-icon name="settings"></t-icon> 前端
    </t-tabs-item>
    <t-tabs-item name="back"> 后端 </t-tabs-item>
    <t-tabs-item name="stack"> 全栈 </t-tabs-item>
    </t-tabs-head>
    <t-tabs-body>
    <t-tabs-pane name="front"> 前端路线 </t-tabs-pane>
    <t-tabs-pane name="back"> 后端战略 </t-tabs-pane>
    <t-tabs-pane name="stack"> 全栈圈子 </t-tabs-pane>
    </t-tabs-body>
</t-tabs>
```

## 附加按钮标签

<ClientOnly>
<Tabs-demo-button/>
</ClientOnly>

```vue
<t-tabs :selected.sync="selectedTab">
    <t-tabs-head>
        <template slot="actions">
            <t-button>设置</t-button>
        </template>
        <t-tabs-item name="front">前端 </t-tabs-item>
        <t-tabs-item name="back"> 后端 </t-tabs-item>
        <t-tabs-item name="stack"> 全栈 </t-tabs-item>
    </t-tabs-head>
    <t-tabs-body>
        <t-tabs-pane name="front"> 前端路线 </t-tabs-pane>
        <t-tabs-pane name="back"> 后端战略 </t-tabs-pane>
        <t-tabs-pane name="stack"> 全栈圈子 </t-tabs-pane>
    </t-tabs-body>
</t-tabs>
```

## Props

### Tabs Props

| 名称     | 类型     | 可选值 | 默认值 | 说明                     |
| -------- | -------- | ------ | ------ | ------------------------ |
| selected | `string` | `*`    | `''`   | 必填，当前激活的tab 面板 |


### TabsItem Props

| 名称     | 类型                 | 可选值 | 默认值  | 说明             |
| -------- | -------------------- | ------ | ------- | ---------------- |
| name     | `string` \| `number` | `*`    | `''`    | 必填，标签的名称 |
| disabled | `boolean`            | `*`    | `false` | 是否禁用         |


### TabsPane Props

| 名称 | 类型                 | 可选值 | 默认值 | 说明             |
| ---- | -------------------- | ------ | ------ | ---------------- |
| name | `string` \| `number` | `*`    | `''`   | 必填，标签的名称 |
