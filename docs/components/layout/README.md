---
title: 布局 Layout
---

# 布局 Layout

协助进行页面级整体布局。

## 组件概述
- Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

- Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。

- Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

- Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

## 经典用法

<ClientOnly>
<Layout-demo/>
</ClientOnly>


```vue
<t-layout class="parent">
    <t-header class="header">header</t-header>
    <t-content class="content">content</t-content>
    <t-footer class="footer">footer</t-footer>
</t-layout>

<t-layout class="parent">
    <t-sider class="sider">sider</t-sider>
    <t-layout>
    <t-header class="header">header</t-header>
    <t-content class="content">content</t-content>
    <t-footer class="footer">footer</t-footer>
    </t-layout>
</t-layout>

<t-layout class="parent">
    <t-header class="header">header</t-header>
    <t-layout>
    <t-sider class="innerSider">sider</t-sider>
    <t-content class="innerContent">content</t-content>
    </t-layout>
    <t-footer class="footer">footer</t-footer>
</t-layout>
```