---
title: 快速上手
---

# 快速上手
本节将介绍如何在项目中使用 tuYoung-UI.


## 引入 tuYoung-UI
你可以引入整个 tuYoung-UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 tuYoung-UI。

### 完整引入
在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import tuyoung from 'tuyoung';
import 'tuyoung/dist/tuyoung.css';
import App from './App.vue';

Vue.use(tuyoung);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了 tuYoung-UI 的引入。需要注意的是，样式文件需要单独引入。

::: warning 注意
需要注意的是，样式文件需要单独引入。
:::

## 按需引入（Tree Shaking）

我们可以只引入需要的组件，以达到减小项目体积的目的。
接下来，如果你只希望引入部分组件，比如 Button 和 Input，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import { Button, Input } from 'tuyoung';
import 'tuyoung/dist/tuyoung.css';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Input)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
::: warning 注意
需要注意的是，样式文件需要单独引入。
:::


## 其他插件引入
比如我们的Toast插件。

```js
import Vue from 'vue';
import { ToastPlugin } from 'tuyoung';
import 'tuyoung/dist/tuyoung.css';
import App from './App.vue';

Vue.use(ToastPlugin) // 不能以Vue.component()的形式注册插件


new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 在SFC中使用
安装后，你可以这样在 SFC 中使用全部组件。

```vue
<template>
  <t-button>tuyoung-ui</t-button>
</template>
```