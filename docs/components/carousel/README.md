---
title: 轮播图  Carousel
---

# 轮播图  Carousel

也叫走马灯。一般用来播放一些好消息。

## 基础用法


<ClientOnly>
<Carousel-demo/>
</ClientOnly>


::: details 点击查看代码

```vue
<t-carousel class="slide" selected="b" :interval="2000">
  <t-carousel-item name="a">
    <div class="box">1</div>
  </t-carousel-item>

  <t-carousel-item name="b">
    <div class="box">2</div>
  </t-carousel-item>

  <t-carousel-item name="c">
    <div class="box">3</div>
  </t-carousel-item>
</t-carousel>
```

:::

## Props

### Carousel Props

| 名称 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- |  --- | --- |
| selected | `string`| `CarouselItem<name>`  | `第一张`  | 从哪一张轮播开始, 与name绑定  |
| autoPlay | `boolean` |`true` \| `flase` | `true` | 是否自动切换 |
| reverse | `boolean` |`true` \| `flase`  | `false` | 是否反向播放 |
| interval | `number` |`*`  | `3000` | 自动播放的间隔 |

#### CarouselItem Props

| 名称 | 类型 | 说明 |
| --- | --- |--- |
| name | `string`|  给定的`name`与`Carousel`的`selected`属性结合使用 |