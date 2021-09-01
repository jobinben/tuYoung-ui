---
title: 栅格/网格布局 Grid
---
# 栅格/网格布局 Grid

一个响应式栅格可以解决大部分布局问题


## 基础用法

<ClientOnly>
<Grid-demo/>
</ClientOnly>

```vue
<t-row class="parent">
    <t-col span="12"><div class="item item-dark">col-12</div></t-col>
    <t-col span="12"><div class="item item-light">col-12</div></t-col>
</t-row>

<t-row class="parent">
    <t-col span="8"><div class="item item-dark">col-12</div></t-col>
    <t-col span="8"><div class="item item-light">col-12</div></t-col>
    <t-col span="8"><div class="item item-dark">col-12</div></t-col>
</t-row>

<t-row class="parent">
    <t-col span="6"><div class="item item-dark">col-6</div></t-col>
    <t-col span="6"><div class="item item-light">col-6</div></t-col>
    <t-col span="6"> <div class="item item-dark">col-6</div></t-col>
    <t-col span="6"> <div class="item item-light">col-6</div></t-col>
</t-row>

<t-row class="parent">
    <t-col span="4"><div class="item item-dark">col-4</div></t-col>
    <t-col span="20"><div class="item item-light">col-20</div></t-col>
</t-row>
```


## 栅格间隔 gutter

<ClientOnly>
<Grid-demo-gutter/>
</ClientOnly>

```vue
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
```

## 栅格偏移 offset

<ClientOnly>
<Grid-demo-offset/>
</ClientOnly>

```vue
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
```

## 响应式栅格

<ClientOnly>
<Grid-demo-response/>
</ClientOnly>

```vue
<t-row class="parent">
    <t-col span="12" :ipad="{ span: 6 }" :narrowPc="{ span: 24 }"><div class="item item-dark">col-24</div></t-col>
    <t-col span="12" :ipad="{ span: 6 }" :narrowPc="{ span: 24 }"><div class="item item-light">col-24</div></t-col>
    <t-col span="12" :ipad="{ span: 6 }" :narrowPc="{ span: 24 }"><div class="item item-dark">col-24</div></t-col>
    <t-col span="12" :ipad="{ span: 6 }" :narrowPc="{ span: 24 }"><div class="item item-light">col-24</div></t-col>
</t-row>
```

## Props

### Row Props

| 名称 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | ---| --- | --- |
| gutter |  `number`  | `*`| `0`  | 	栅格间隔 |
| align |  `string`  |`left` \| `right` \| `center` | `undefined`  | 栅格`t-col`的垂直排列方式 |

### Col Props

| 名称 | 类型 | 可选值 |默认值 | 说明 |
| --- | --- | --- | --- | --- |
| span |  `number`  |`1~24` |`undefined`  | 栅格占据的列数 |
| offset | `number`| `*` |`0` | 栅格左侧的间隔格数 |
| ipad | `object`| `{span, offset}` |`null` | `屏幕 > 576px` 响应式栅格 |
| narrowPc | `object`| `{span, offset}` |`null` | `屏幕 > 768px` 响应式栅格 |
| pc | `object`| `{span, offset}` |`null` | `屏幕 > 992px` 响应式栅格 |
| widePc | `object`| `{span, offset}` |`null` | `屏幕 > 1200px` 响应式栅格 |