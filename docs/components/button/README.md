---
title: 按钮 Button
---
# 按钮 Button
按钮用来触发一些操作。


## 基础用法

按钮的 `type` 分别为 `default`、`primary`、`info`、`success`、`warning` 和 `error`。
<ClientOnly>
<Button-demo/>
</ClientOnly>


::: details 点击查看代码
```vue
    <t-button>Default</t-button>
    <t-button type="primary">Primary</t-button>
    <t-button type="info">Info</t-button>
    <t-button type="success">Success</t-button>
    <t-button type="warning">Warning</t-button>
    <t-button type="error">Error</t-button>
``` 
:::

## 图标
在按钮上使用图标。
<ClientOnly>
<Button-icon-demo/>
</ClientOnly>

::: details 点击查看代码

```vue
    <t-button icon="awesome">左赞</t-button>
    <t-button icon="awesome" iconPosition="right">右赞</t-button>
    <t-button icon="settings">设置</t-button>
    <t-button icon="success">成功</t-button>
    <t-button icon="error">警告</t-button>
    <t-button icon="download">下载</t-button>
    <t-button icon="down" iconPosition="right">更多</t-button>
``` 
:::

## 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。
<ClientOnly>
<Button-loading-demo/>
</ClientOnly>

::: details 点击查看代码

```vue
    <t-button :loading="!status" @click="status = !status">Loading</t-button>
    <t-button :loading="!status2" @click="status2 = !status2" iconPosition="right">Loading</t-button>
    <t-button :loading="!status3" @click="status3 = !status3" icon="success">有图标的加载</t-button>
``` 
:::

## 按钮组
可以把几个按钮结合成按钮组。
<ClientOnly>
<Button-group-demo/>
</ClientOnly>

::: details 点击查看代码

```vue
      <t-button-group>
        <t-button icon="left">Back</t-button>
        <t-button>More</t-button>
        <t-button icon="right" iconPosition="right">Next</t-button>
      </t-button-group>

      <t-button-group>
        <t-button type="default" icon="left">上一页</t-button>
        <t-button type="default" icon="right" iconPosition="right">下一页</t-button>
      </t-button-group>
``` 
:::

## Props

### Button Props

| 名称         | 类型      | 可选值                                                                | 默认值    | 说明                 |
| ------------ | --------- | --------------------------------------------------------------------- | --------- | -------------------- |
| icon         | `string`  | `参考t-icon组件`                                                      | `null`    | 按钮图标             |
| iconPosition | `string`  | `left` \| `right`                                                     | `left`    | 按钮图标的位置       |
| loading      | `boolean` | `true |false`                                                         | `false`   | 按钮是否显示加载状态 |
| type         | `string`  | `default` \| `primary` \| `success` \| `info` \| `warning` \| `error` | `default` | 按钮的类型           |

