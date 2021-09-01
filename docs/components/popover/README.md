---
title: 弹出信息 Popover
---
# 弹出信息 Popover

Popover 在内容周围弹出一些隐藏的信息。Popover 里面没什么内置样式，在里面填什么主要靠你了。

## 基础用法

<ClientOnly>
<Popover-demo/>
</ClientOnly>

```vue
<t-popover position="top">
    <template slot="content">
    <div>I am here!</div>
    </template>
    <t-button>上面</t-button>
</t-popover>

<t-popover  position="bottom">
    <template slot="content">
    <div>I am here!</div>
    </template>
    <t-button>下面</t-button>
</t-popover>

<t-popover  position="left">
    <template slot="content">
    <div>I am here!</div>
    </template>
    <t-button>左边</t-button>
</t-popover>

<t-popover position="right">
    <template slot="content">
    <div>I am here!</div>
    </template>
    <t-button>右边</t-button>
</t-popover>
```

## Hover

<ClientOnly>
<Popover-demo-hover/>
</ClientOnly>

```vue
<t-popover position="top" trigger="hover">
    <template slot="content">
    <div>I am here!</div>
    </template>
    <t-button>上面</t-button>
</t-popover>

<t-popover  position="bottom" trigger="hover">
    <template slot="content">
    <div>I am here!</div>
    </template>
    <t-button>下面</t-button>
</t-popover>

<t-popover  position="left" trigger="hover">
    <template slot="content">
    <div>I am here!</div>
    </template>
    <t-button>左边</t-button>
</t-popover>

<t-popover position="right" trigger="hover">
    <template slot="content">
    <div>I am here!</div>
    </template>
    <t-button>右边</t-button>
</t-popover>
```


## Props

### popover Props

| 名称 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- |  --- | --- |
| position | `string`| `top` \| `bottom` \| `left` \| `right`| `top`  | popover 的弹出位置 |
| trigger | `string` |`click` \| `hover` | `click` | popover 的触发方式 |